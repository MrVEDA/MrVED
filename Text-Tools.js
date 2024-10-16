
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

 let originalText = '';
      const textInput = document.getElementById('textInput');
      const findInput = document.getElementById('findInput');
      const replaceInput = document.getElementById('replaceInput');
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
      }

      // Live Find and Replace function
      function liveFindReplace() {
          let text = originalText || textInput.value;
          let findValue = findInput.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape regex characters
          let replaceValue = replaceInput.value;

          if (findValue) {
              let regex = new RegExp(findValue, 'g');
              text = text.replace(regex, replaceValue);
          }

          textInput.value = text;
          updateStats();
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

      // Save original text for further processing
      textInput.addEventListener('input', () => {
          originalText = textInput.value;
      });

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

      // Remove empty lines
      function removeEmptyLines() {
          textInput.value = textInput.value.split('\n').filter(line => line.trim() !== '').join('\n');
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
