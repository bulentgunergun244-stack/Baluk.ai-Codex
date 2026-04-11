const codeInput = document.getElementById("codeInput");
const output = document.getElementById("output");
const runBtn = document.getElementById("runBtn");
const clearCodeBtn = document.getElementById("clearCodeBtn");
const clearOutputBtn = document.getElementById("clearOutputBtn");
const exampleBtn = document.getElementById("exampleBtn");
const toggleTutorialBtn = document.getElementById("toggleTutorialBtn");
const tutorialContent = document.getElementById("tutorialContent");
const balukAiBtn = document.getElementById("balukAiBtn");
const aiPrompt = document.getElementById("aiPrompt");
const aiResponse = document.getElementById("aiResponse");

const variables = {};

function addLine(text, type = "") {
  const line = document.createElement("div");
  if (type) line.classList.add(type);
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function clearOutput() {
  output.innerHTML = "";
}

function getValue(raw) {
  const value = raw.trim();

  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }

  if (!isNaN(Number(value))) {
    return Number(value);
  }

  if (value in variables) {
    return variables[value];
  }

  return value;
}

function evaluateMath(expr) {
  const replaced = expr.replace(/[A-Za-z_][A-Za-z0-9_]*/g, (name) => {
    if (name in variables && typeof variables[name] === "number") {
      return variables[name];
    }
    return name;
  });

  try {
    const result = Function(`return (${replaced})`)();
    return result;
  } catch {
    return null;
  }
}

function runBLM(code) {
  const lines = code
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);

  for (const line of lines) {
    if (line.startsWith("print ")) {
      const content = line.slice(6).trim();
      const value = getValue(content);
      addLine(String(value), "success");
    }

    else if (line.startsWith("math ")) {
      const expr = line.slice(5).trim();
      const result = evaluateMath(expr);
      if (result === null || result === undefined || Number.isNaN(result)) {
        addLine("Matematik hatası: işlem çözülemedi.", "error");
      } else {
        addLine(`Sonuç: ${result}`, "info");
      }
    }

    else if (line.startsWith("set ")) {
      const match = line.match(/^set\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$/);
      if (!match) {
        addLine("Değişken tanımı hatalı.", "error");
      } else {
        const [, name, rawValue] = match;
        const value = getValue(rawValue);
        variables[name] = value;
        addLine(`Değişken kaydedildi: ${name} = ${value}`, "info");
      }
    }

    else if (line.startsWith("if ")) {
      const match = line.match(/^if\s+(.+)\s+then\s+(.+)$/);
      if (!match) {
        addLine("If komutu hatalı.", "error");
      } else {
        const conditionText = match[1];
        const commandText = match[2];
        const preparedCondition = conditionText.replace(/[A-Za-z_][A-Za-z0-9_]*/g, (name) => {
          if (name in variables) {
            return JSON.stringify(variables[name]);
          }
          return name;
        });

        try {
          const conditionResult = Function(`return (${preparedCondition})`)();
          if (conditionResult) {
            runBLM(commandText);
          } else {
            addLine("Koşul yanlış, komut çalışmadı.", "info");
          }
        } catch {
          addLine("Koşul çözümlenemedi.", "error");
        }
      }
    }

    else if (line.startsWith("repeat ")) {
      const match = line.match(/^repeat\s+(\d+)\s+(.+)$/);
      if (!match) {
        addLine("Repeat komutu hatalı.", "error");
      } else {
        const count = Number(match[1]);
        const command = match[2];
        for (let i = 0; i < count; i++) {
          runBLM(command);
        }
      }
    }

    else if (line === "clear") {
      clearOutput();
    }

    else if (line === "help") {
      addLine("BLM Yardım:", "info");
      addLine('print "Merhaba"');
      addLine("math 5 + 7");
      addLine('set isim = "Baluk"');
      addLine("print isim");
      addLine('if 5 > 3 then print "Doğru"');
      addLine('repeat 3 print "Tekrar"');
    }

    else {
      addLine(`Bilinmeyen komut: ${line}`, "error");
    }
  }
}

runBtn.addEventListener("click", () => {
  clearOutput();
  runBLM(codeInput.value);
});

clearCodeBtn.addEventListener("click", () => {
  codeInput.value = "";
});

clearOutputBtn.addEventListener("click", () => {
  clearOutput();
});

exampleBtn.addEventListener("click", () => {
  codeInput.value = `print "Baluk Engine başladı"
math 10 + 20
math 7 * 8
set isim = "BLM"
print isim
set yas = 13
if yas > 10 then print "Kullanıcı güçlü"
repeat 3 print "Baluk"`;
});

toggleTutorialBtn.addEventListener("click", () => {
  tutorialContent.classList.toggle("show");
});

balukAiBtn.addEventListener("click", () => {
  const prompt = aiPrompt.value.trim();

  if (!prompt) {
    aiResponse.textContent = "Önce Baluk.ai için bir istek yaz.";
    return;
  }

  aiResponse.innerHTML = `İstek alındı: <strong>${prompt}</strong><br><br>Bu buton şu an temel aşamada. Sonraki sürümde Baluk.ai burada otomatik BLM kodu önerecek.`;
});