$(document).ready(function() {
    const $terminal = $(".terminal");

    $terminal.on("keydown", function(event) {
        if (event.key === "Enter") {
            const lines = $terminal.val().split("\n");
            const lastLine = lines[lines.length - 2];  // -1 would be the current empty line after pressing Enter
            const [command, ...args] = lastLine.split(" ");

            switch (command) {
                case "print":
                    $terminal.val($terminal.val() + args.join(" ") + "\n");
                    break;
                case "add":
                    $terminal.val($terminal.val() + args.join(" ") + "\n");
                    break;
                default:
                    $terminal.val($terminal.val() + `Unknown command: ${command}\n`);
            }

            // Auto scroll to the bottom
            $terminal.scrollTop($terminal[0].scrollHeight);

            event.preventDefault();  // Prevent the default "Enter" behavior which adds a newline
        }
    });
});
