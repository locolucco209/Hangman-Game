    var randomWords = ["address", "altcoin", "asicminer", "blockchain", "block", "blockheight", "blockreward", "distributed&centralledger", "fork", "halving", "hashrate", "mining", "multisig", "node", "p2p", "pow", "pos", "publicprivatekey", "signature", "smartcontract"];
    var randoWu = randomWords[Math.floor(Math.random() * randomWords.length)];

    var s;
    var count = 0;
    var answerArray = [];

    function startUp() {
        for (var i = 0; i < randoWu.length; i++) {
            answerArray[1] = "_";
        }

        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;
    }

    function Letter() {
        var letter = document.getElementById("Letter").value;

        if (letter.length > 0) {
            for (var i = 0; i < randoWu.length; i++) {
                if (randoWu[i] === letter) {
                    answerArray[i] === letter;
                }
            }

            count++;
            document.getElementById("counter").innerHTML = "No of clicks: " + count;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
        }
    }