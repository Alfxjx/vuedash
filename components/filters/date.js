/**
 * @description 格式化数字，个位数加0
 * @date 2019-08-08
 * @param {Number}
 * @returns {Number}
 */
function formatNumber(n) {
  let str = n.toString();
  return str.length < 2 ? Number(str) : Number(`0${str}`);
}

/**
 * @description
 * @date 2019-08-08
 * @export
 * @param {Date} time 时间，单位为毫秒(ms)
 * @param {string} format 格式模板 如 yyyy.MM.dd.hh.mm.ss
 * @returns {string} example: 2020.08.06
 */
export function formatDate(time1, format) {
  let time = new Date(time1);

  // 年月日时分秒
  const yyyy = time.getFullYear();
  // 月份
  const M = time.getMonth() + 1;
  const d = time.getDate();
  const h = time.getHours();
  // 分钟
  const m = time.getMinutes();
  const s = time.getSeconds();

  // 个位数加0
  const MM = formatNumber(M);
  const dd = formatNumber(d);
  const hh = formatNumber(h);
  const mm = formatNumber(m);
  const ss = formatNumber(s);

  // 匹配格式模板，对应的是输入的格式和得到的值。
  let templates = [
    { reg: "yyyy", value: yyyy },
    { reg: "MM", value: MM },
    { reg: "M", value: M },
    { reg: "dd", value: dd },
    { reg: "d", value: d },
    { reg: "hh", value: hh },
    { reg: "h", value: h },
    { reg: "mm", value: mm },
    { reg: "m", value: m },
    { reg: "ss", value: ss },
    { reg: "s", value: s }
  ];

  let result = format;

  for (let template of templates) {
    result = result.replace(template.reg, template.value.toString());
  }
  return result;
}
