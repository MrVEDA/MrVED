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
