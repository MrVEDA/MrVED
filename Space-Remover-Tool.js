let textHistory = [];
      let redoStack = [];
      const textInput = document.getElementById('textInput');
      const charCountElement = document.getElementById('charCount');
      const wordCountElement = document.getElementById('wordCount');
      const progressBar = document.getElementById('progressBar');
      const wordTarget = 10000;  // Target word count for progress bar

      // Function to update word and character count and progress bar
      function updateStats() {
          let text = textInput.value;
          let wordCount = text.trim().split(/\s+/).filter(word => word !== "").length;
          let charCount = text.length;

          charCountElement.innerText = charCount;
          wordCountElement.innerText = wordCount;

          // Update progress bar based on word count
          let progress = Math.min((wordCount / wordTarget) * 100, 100);
          progressBar.style.width = progress + "%";

          // Save state for undo functionality
          if (!textHistory.length || textHistory[textHistory.length - 1] !== text) {
              textHistory.push(text);
          }
      }

      // Remove extra spaces between words
      function removeExtraSpaces() {
          textInput.value = textInput.value.replace(/\s+/g, ' ').trim();
          updateStats();
      }

      // Remove all spaces
      function removeAllSpaces() {
          textInput.value = textInput.value.replace(/\s+/g, '');
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
