var substitutions = {
"!": [{"！": "U+FF01"}],
"\"": [{"″": "U+2033"}, {"＂": "U+FF02"}],
"$": [{"＄": "U+FF04"}],
"%": [{"％": "U+FF05"}],
"&": [{"＆": "U+FF06"}],
"'": [{"＇": "U+FF07"}],
"(": [{"（": "U+FF08"}],
")": [{"）": "U+FF09"}],
"*": [{"⁎": "U+204E"}, {"＊": "U+FF0A"}],
"+": [{"＋": "U+FF0B"}],
",": [{"‚": "U+201A"}, {"，": "U+FF0C"}],
"-": [{"‐": "U+2010"}, {"－": "U+FF0D"}, {"𐆑": "U+10191"}],
".": [{"．": "U+FF0E"}],
"/": [{"⁄": "U+2044"}, {"／": "U+FF0F"}],
"0": [{"O": "U+004F"}, {"０": "U+FF10"}, {"𐒠": "U+104A0"}],
"1": [{"I": "U+0049"}, {"１": "U+FF11"}],
"2": [{"２": "U+FF12"}],
"3": [{"３": "U+FF13"}],
"4": [{"４": "U+FF14"}],
"5": [{"５": "U+FF15"}],
"6": [{"６": "U+FF16"}],
"7": [{"７": "U+FF17"}, {"𐒇": "U+10487"}],
"8": [{"８": "U+FF18"}],
"9": [{"９": "U+FF19"}],
";": [{";": "U+037E"}, {"；": "U+FF1B"}],
"<": [{"‹": "U+2039"}, {"＜": "U+FF1C"}],
"=": [{"＝": "U+FF1D"}, {"𐆐": "U+10190"}],
">": [{"›": "U+203A"}, {"＞": "U+FF1E"}],
"?": [{"？": "U+FF1F"}],
"@": [{"＠": "U+FF20"}],
"A": [{"Α": "U+0391"}, {"А": "U+0410"}, {"Ꭺ": "U+13AA"}, {"Ａ": "U+FF21"}],
"B": [{"ʙ": "U+0299"}, {"Β": "U+0392"}, {"В": "U+0412"}, {"Ᏼ": "U+13F4"}, {"ᛒ": "U+16D2"}, {"Ｂ": "U+FF22"}],
"C": [{"Ϲ": "U+03F9"}, {"С": "U+0421"}, {"Ꮯ": "U+13DF"}, {"Ⅽ": "U+216D"}, {"Ｃ": "U+FF23"}, {"𐒨": "U+104A8"}],
"D": [{"Ꭰ": "U+13A0"}, {"Ⅾ": "U+216E"}, {"Ｄ": "U+FF24"}],
"E": [{"Ε": "U+0395"}, {"Е": "U+0415"}, {"Ꭼ": "U+13AC"}, {"Ｅ": "U+FF25"}],
"F": [{"Ϝ": "U+03DC"}, {"Ｆ": "U+FF26"}],
"G": [{"ɢ": "U+0262"}, {"Ԍ": "U+050C"}, {"Ꮐ": "U+13C0"}, {"Ｇ": "U+FF27"}],
"H": [{"ʜ": "U+029C"}, {"Η": "U+0397"}, {"Н": "U+041D"}, {"Ꮋ": "U+13BB"}, {"Ｈ": "U+FF28"}],
"I": [{"l": "U+006C"}, {"Ι": "U+0399"}, {"І": "U+0406"}, {"ᛁ": "U+16C1"}, {"Ⅰ": "U+2160"}, {"Ｉ": "U+FF29"}, {"𐒃": "U+10483"}],
"J": [{"Ј": "U+0408"}, {"Ꭻ": "U+13AB"}, {"Ｊ": "U+FF2A"}],
"K": [{"Κ": "U+039A"}, {"К": "U+041A"}, {"Ꮶ": "U+13E6"}, {"ᛕ": "U+16D5"}, {"K": "U+212A"}, {"Ｋ": "U+FF2B"}],
"L": [{"ʟ": "U+029F"}, {"Ꮮ": "U+13DE"}, {"Ⅼ": "U+216C"}, {"Ｌ": "U+FF2C"}],
"M": [{"Μ": "U+039C"}, {"М": "U+041C"}, {"Ꮇ": "U+13B7"}, {"ᛖ": "U+16D6"}, {"Ⅿ": "U+216F"}, {"Ｍ": "U+FF2D"}],
"N": [{"ɴ": "U+0274"}, {"Ν": "U+039D"}, {"Ｎ": "U+FF2E"}],
"O": [{"0": "U+0030"}, {"Ο": "U+039F"}, {"О": "U+041E"}, {"Ｏ": "U+FF2F"}, {"𐒆": "U+10486"}],
"P": [{"Ρ": "U+03A1"}, {"Р": "U+0420"}, {"Ꮲ": "U+13E2"}, {"Ｐ": "U+FF30"}],
"Q": [{"Ｑ": "U+FF31"}],
"R": [{"ʀ": "U+0280"}, {"Ꮢ": "U+13D2"}, {"ᚱ": "U+16B1"}, {"Ｒ": "U+FF32"}],
"S": [{"Ѕ": "U+0405"}, {"Ꮪ": "U+13DA"}, {"Ｓ": "U+FF33"}, {"𐒖": "U+10496"}],
"T": [{"Τ": "U+03A4"}, {"Т": "U+0422"}, {"Ꭲ": "U+13A2"}, {"Ｔ": "U+FF34"}],
"U": [{"Ｕ": "U+FF35"}],
"V": [{"Ѵ": "U+0474"}, {"Ꮩ": "U+13D9"}, {"Ⅴ": "U+2164"}, {"Ｖ": "U+FF36"}],
"W": [{"Ꮃ": "U+13B3"}, {"Ｗ": "U+FF37"}],
"X": [{"Χ": "U+03A7"}, {"Х": "U+0425"}, {"Ⅹ": "U+2169"}, {"Ｘ": "U+FF38"}],
"Y": [{"ʏ": "U+028F"}, {"Υ": "U+03A5"}, {"Ү": "U+04AE"}, {"Ｙ": "U+FF39"}],
"Z": [{"Ζ": "U+0396"}, {"Ꮓ": "U+13C3"}, {"Ｚ": "U+FF3A"}],
"[": [{"［": "U+FF3B"}],
"\\": [{"＼": "U+FF3C"}],
"]": [{"］": "U+FF3D"}],
"^": [{"＾": "U+FF3E"}],
"_": [{"＿": "U+FF3F"}],
"`": [{"｀": "U+FF40"}],
"a": [{"ɑ": "U+0251"}, {"а": "U+0430"}, {"ａ": "U+FF41"}],
"b": [{"Ь": "U+042C"}, {"ｂ": "U+FF42"}],
"c": [{"ϲ": "U+03F2"}, {"с": "U+0441"}, {"ⅽ": "U+217D"}, {"ｃ": "U+FF43"}],
"d": [{"ԁ": "U+0501"}, {"ⅾ": "U+217E"}, {"ｄ": "U+FF44"}],
"e": [{"е": "U+0435"}, {"ｅ": "U+FF45"}],
"f": [{"ｆ": "U+FF46"}],
"g": [{"ɡ": "U+0261"}, {"ｇ": "U+FF47"}],
"h": [{"һ": "U+04BB"}, {"ｈ": "U+FF48"}],
"i": [{"ɩ": "U+0269"}, {"і": "U+0456"}, {"Ꭵ": "U+13A5"}, {"ⅰ": "U+2170"}, {"ｉ": "U+FF49"}],
"j": [{"ј": "U+0458"}, {"ｊ": "U+FF4A"}],
"k": [{"ｋ": "U+FF4B"}],
"l": [{"ⅼ": "U+217C"}, {"ｌ": "U+FF4C"}],
"m": [{"ⅿ": "U+217F"}, {"ｍ": "U+FF4D"}],
"n": [{"ｎ": "U+FF4E"}],
"o": [{"ο": "U+03BF"}, {"о": "U+043E"}, {"ｏ": "U+FF4F"}],
"p": [{"р": "U+0440"}, {"ｐ": "U+FF50"}],
"q": [{"ｑ": "U+FF51"}],
"r": [{"ｒ": "U+FF52"}],
"s": [{"ѕ": "U+0455"}, {"ｓ": "U+FF53"}],
"t": [{"ｔ": "U+FF54"}],
"u": [{"ｕ": "U+FF55"}],
"v": [{"ν": "U+03BD"}, {"ѵ": "U+0475"}, {"ⅴ": "U+2174"}, {"ｖ": "U+FF56"}],
"w": [{"ѡ": "U+0461"}, {"ｗ": "U+FF57"}],
"x": [{"х": "U+0445"}, {"ⅹ": "U+2179"}, {"ｘ": "U+FF58"}],
"y": [{"у": "U+0443"}, {"ｙ": "U+FF59"}],
"z": [{"ｚ": "U+FF5A"}],
"{": [{"｛": "U+FF5B"}],
"|": [{"ǀ": "U+01C0"}, {"｜": "U+FF5C"}],
"}": [{"｝": "U+FF5D"}],
"~": [{"⁓": "U+2053"}, {"～": "U+FF5E"}],
"Ä": [{"Ӓ": "U+04D2"}],
"Ö": [{"Ӧ": "U+04E6"}],
"ß": [{"β": "U+03B2"}],
"ä": [{"ӓ": "U+04D3"}],
"ö": [{"ӧ": "U+04E7"}]
}
function replaceChar(character) {
    if (character in substitutions && Math.random() > 0.5) {
        return substitutions[character][Math.floor(Math.random() * substitutions[character].length)];
    } else {
        var result = {};
        result[character] = "";
        return result;
    }
};

function replace(input) {
    var result = [];
    for (var i = 0; i < input.length; i++) {
        var current = replaceChar(input.charAt(i));
        result[Object.keys(current)[0]] = current[0];
    }
    return result;
};