 let textHistory = [];
      let redoStack = [];
      const textInput = document.getElementById('textInput');
      const progressBar = document.getElementById('progressBar');
      const wordTarget = 10000;  // Target word count for progress bar

      // Function to update word and character count
      function updateStats() {
          let text = textInput.value;
          let wordCount = text.trim().split(/\s+/).filter(word => word !== "").length;
          let charCount = text.length;

          document.getElementById('wordCount').innerText = wordCount;
          document.getElementById('charCount').innerText = charCount;

          // Update progress bar based on word count
          let progress = Math.min((wordCount / wordTarget) * 100, 100);
          progressBar.style.width = progress + "%";

          // Save state for undo functionality
          if (!textHistory.length || textHistory[textHistory.length - 1] !== text) {
              textHistory.push(text);
          }
      }

      // Convert to uppercase
      function toUpperCaseText() {
          textInput.value = textInput.value.toUpperCase();
          updateStats();
      }

      // Convert to lowercase
      function toLowerCaseText() {
          textInput.value = textInput.value.toLowerCase();
          updateStats();
      }

      // Convert to sentence case
      function toSentenceCaseText() {
          let text = textInput.value.toLowerCase().split(". ");
          for (let i = 0; i < text.length; i++) {
              text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
          }
          textInput.value = text.join(". ");
          updateStats();
      }

      // Convert to title case
      function toTitleCaseText() {
          let text = textInput.value.toLowerCase().split(" ");
          for (let i = 0; i < text.length; i++) {
              text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
          }
          textInput.value = text.join(" ");
          updateStats();
      }

      // Undo functionality
      function undoText() {
          if (textHistory.length > 1) {
              redoStack.push(textHistory.pop());
              textInput.value = textHistory[textHistory.length - 1] || '';
              updateStats();
          }
      }

      // Redo functionality
      function redoText() {
          if (redoStack.length > 0) {
              const redoText = redoStack.pop();
              textInput.value = redoText;
              textHistory.push(redoText);
              updateStats();
          }
      }

      // Copy text to clipboard
      function copyText() {
          textInput.select();
          document.execCommand('copy');
          alert('Text copied to clipboard!');
      }

      // Save text as .txt file
      function saveText() {
          let text = textInput.value;
          let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
          let link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "textInput.txt";
          link.click();
      }
