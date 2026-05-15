/**
 * CS2 Drop Overlay
 * @author LuciusFKR
 * @copyright Copyright (c) 2026 LuciusFKR
 * @license CC BY-NC 4.0
 * * This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
 * You are free to share and adapt the material, provided you give appropriate credit
 * and DO NOT use the material for commercial purposes.
 */


// SKIN DATABASE SORTED BY CASES
const CASE_DB = {
  'kilowatt_case': [
    { name: 'AK-47 | Inheritance', rarity: 'covert', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQ0OKheqdoLPGaAFicyOl-pK8xGH_nwUt1sGrSz9ivcHKQOAcjXMYkRu5Yuxe4lYCyZOq25VSM2oMT02yg2UxBSEgA' },
    { name: 'AWP | Chrome Cannon', rarity: 'covert', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OarZbRoMvWXMWuZxuZi_uM6SXngxR5-smTXw4ugIi6RbVcpXsN1ELUDtxPrktOyNL7h4g2P2tpbjXKpKIbjbD4' },
    { name: 'USP-S | Jawbreaker', rarity: 'classified', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODHViUzulxqd5lRi67gVMl62nUyd2scnOVPAcgA5J2TOFY5xLrlN22YbzgsQaI2IlHyiWojnwa8G81tErOD-_J' },
    { name: 'Zeus x27 | Olympus', rarity: 'classified', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLln4Xl7x1B6ue9V7BlNf6XC3WvxuFyj-1gSCGn2xl2sm7XnI6hdC-XPAcmXsF2RLIP4xbslty2NLvqswePjYlEySn33S9XrnE8cYTqlUY' },
    { name: 'M4A1-S | Black Lotus', rarity: 'classified', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_ux6seJicCW8gQg0jDGMnYftbynFZg8nXpt2Ru8D5hSwl9PhN7_m7wzdjotFxXr62y4Y6C894OxQVKA7uvqAvobUkb8' },
    { name: 'Sawed-Off | Analog Input', rarity: 'restricted', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c29abNoJP-VCFiXwONzot5lRi67gVN3tWTdyNipdCiQPwdxCJV2RuBY4xa_wILgMLu37leK3otMzHmo3H5J8G81tFoL-ETi' },
    { name: 'MP7 | Just Smile', rarity: 'restricted', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf8DIM0Pi7e7BSM_2aAmKvzedxuPUnHXrkzU4i4z-Dno6sci3BaQApDpN4R-cCthnqx4W2MunhtgCI3d0QmzK-0H0MYFOvtA' },
    { name: 'Five-SeveN | Hybrid', rarity: 'restricted', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRbq17JeOWGGKe_uZvsvNgSxa_nBovp3OBmd6oJXyeaQ9yCsZxEOICsUO7kdK0Y-qxtFCN2YsQnCv7i39N7ixp_a9cBsh2vVQD' },
    { name: 'M4A4 | Etch Lord', rarity: 'restricted', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRe6psK_WRB3OV_uJ_t-l9AXjnw0Qh5GqGn9b_dH3Cbg4nCcAhRLIM4BW7mtXmM7jjtAXai40WmHngznQeK6EUrpc' },
    { name: 'Glock-18 | Block-18', rarity: 'restricted', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5tvMvmQBVidzuByouhoQRa_nBovp3PXzov9cyjDbwckXMMkF7IIthOwwNDmY-rq4AzfjItMyH_9iC0YuC04_a9cBk5_kH3q' },
    { name: 'UMP-45 | Motorized', rarity: 'milspec', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1O4uL6PZtsM-OWA2WcxOpJte9uRie2qhEutDWR1N2gcy7DalAhCMd3QucO5EPukN2yN-iw5QyN2IkRzSr6iXtO6StrsL0cEf1y62CUsqE' },
    { name: 'Tec-9 | Slag', rarity: 'milspec', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wjZe7KuRYrFjK-mSHGOvxOBxue9sSju6mxoYvzSCkpu3eHPFZwMkWZBzR-cDsEbpm9DvY-yx51fajd8WyXn4hntBvX465OkBVL1lpPMDDuBGag' },
    { name: 'SSG 08 | Dezastre', rarity: 'milspec', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1I_PX-MJtpJeqSHXOCxNF6ueZhW2exwEp2tmmEw9epdCjCalQhX5ImQOZbtRixxNTgN-u24AHb2okTmX2vkGoXuacR7BX3' },
    { name: 'Nova | Dark Sigil', rarity: 'milspec', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwixU-fORbLZsK_uSHFicyOl-pK8xG3q1lk0l4m2HmI6odXiRbwF1CJchQbEI4RK8kNPiMb-24A3W3YoX02yg2YjfpjSA' },
    { name: 'XM1014 | Irezumi', rarity: 'milspec', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk9___OPU5H_mBC32FzOdJvOhuRz39k0h14juBztapc3-fPVIjWZomFucMtxe9m9zmNOjltQ2N2dgTnCr_3zQJsHjkNdtnHQ' },
    { name: 'Dual Berettas | Hideout', rarity: 'milspec', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1f-vOiV6ZoMvWHGmaD_uJzpOloQxa0hxQpjDGMnYftb3-WbQ92WcZ4EeFZs0TtxIfvZr_m7wXW2I0TySv93ywd5yxu5-0FAPE7uvqA-FxXgtE' },
    { name: '★ Rare Special Item ★', rarity: 'ancient', image: "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/default_rare_item_png.png" }
  ],

  'dreams_nightmares_case': [
    {
    "name": "AK-47 | Nightwish",
    "rarity": "covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSLvmUBnOHyP1-j-1gSCGn20glt2nXnt78cnKUbwN2XJp2R-ZbuxHqlNXlMLiw5AHc3toWnCur23hXrnE8p0T2bx4"
  },
  {
    "name": "MP9 | Starlight Protector",
    "rarity": "covert",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f-jFk4uL3V7d5IeKfB2CY1dF6ueZhW2flkUtztz_SzYypJSqRalUhDJNwQO4PsBXtx9HkN-K37w3bgohGmHn3kGoXuZ3lRdvF"
  },
  {
    "name": "Dual Berettas | Melondrama",
    "rarity": "classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2rZK15JeOsDGKHwPxzj-1gSCGn20t_5TiBmdf9Jy-QaQIiW5F1E-BesxG9lIaxNuLj41He340Ryi79ii5XrnE8Xl7Qhlk"
  },
  {
    "name": "FAMAS | Rapid Eye Movement",
    "rarity": "classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-BD3eZxdFzqeR6cCW6khUz_WjRmN79JXmePABxDsB1QeZetxnqx9XhN-nk4A3f399CzX2qiCsa7yd1o7FVINiMH98"
  },
  {
    "name": "MP7 | Abyssal Apparition",
    "rarity": "classified",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V6JoIeKsAm6Xyfo45uc9GnnnzBh-5zzTw9n9I3mQPAEgD5YlFuIOthC6wNK1MeKwsgHeiZUFk3vcOiyhPQ"
  },
  {
    "name": "PP-Bizon | Space Cat",
    "rarity": "restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-AHmaTxO13pN5lRi67gVN04jvcmYv6IHnGbw51XsYmQO5ftBG9xoexNrix4gPYjIJEzX_2iX9I8G81tOIzQC5J"
  },
  {
    "name": "G3SG1 | Dream Glade",
    "rarity": "restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-UAmaUxNF6ueZhW2e3wkl162TVmdqvd3mUPw9yDJZ4FOYJ4UKxkNfiNrvn4QCMjdlHmHj6kGoXub9gXKkW"
  },
  {
    "name": "M4A1-S | Night Terror",
    "rarity": "restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9lj-hnXCa-mxQmjDGMnYftby3FPFVxA5ZwRecOtUXuxtPiNL_jsQLc2NkTzS38jC5L7ydj5u8EUKo7uvqAgGSM4LM"
  },
  {
    "name": "XM1014 | Zombie Offensive",
    "rarity": "restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7v-RcKlSOv-eDG6V_uFwtuRnXCClkCIrujqNjsGqdnzEOFUjW5omROQNt0LuwNKyYeKwslfYiN0Qmyr83Hsd6iZj5esAT-N7rRccpDyZ"
  },
  {
    "name": "USP-S | Ticket to Hell",
    "rarity": "restricted",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_vp5j-lsQyWMmRQguynLzt_8JXiVOwF2AsF4R-ECshftltKxZe6x41CKjotExST8jn8f7ilr5PFCD_TZVvgG5g"
  },
  {
    "name": "Five-SeveN | Scrawl",
    "rarity": "milspec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-BlXyGyqhIqtjqEpYPwJiPTcAInA5J0FO9csBSww4bhZruzswLcjIsXmCusjCsbuno_57tXUqB386HJz1aW2pI_m5Q"
  },
  {
    "name": "MAC-10 | Ensnared",
    "rarity": "milspec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-DB3-ZxNF6ueZhW2fikB935ziGztj7JHyQbgIkWZsmFrJY4xTpwdOzP-Oz7laNj4lFyy2tkGoXudbL5uIf"
  },
  {
    "name": "MAG-7 | Foresight",
    "rarity": "milspec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSMOKWCm6T1eFkj-1gSCGn2xgmsWvRm96seXOfbFMjXJR1R-NY4xjukNLlYurn4QeN3t5CmCT7jHxXrnE8UENGXls"
  },
  {
    "name": "MP5-SD | Necro Jr.",
    "rarity": "milspec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSK_mXMWmVwvx5vu5kRiq8myIrujqNjsH8JXqXPVAhDZVyR7YO4ETrxtLvZbmxtAXfiIpCzHr5h3tB635j4-gCT-N7reJfmdfh"
  },
  {
    "name": "P2000 | Lifted Spirits",
    "rarity": "milspec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_K8-VAn6Zz-lJtPNsTiSMmRQguynLydatcHrEOgIhXJZxReINtRO7ltexZuiwtQPd34lFxXqqjisYun444fFCD_R1ajI6RQ"
  },
  {
    "name": "Sawed-Off | Spirit Board",
    "rarity": "milspec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F5pehjTha_nBovp3OEyN-ocCmWPwYkCpoiE-QMt0bsxNbnNLm25waK345DyST23CpP5ytp_a9cBm4mGqdG"
  },
  {
    "name": "SCAR-20 | Poultrygeist",
    "rarity": "milspec",
    "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk_OKRe6dsMs-QBm6Tyut4tuhuRz2MmRQguynLno2pdnnGOw9xWcFwEbMCtkHsmoXuNe23tVGNiINCyyv6iylJuyZi5_FCD_Tlwp1EIg"
  },
  {
    "name": "★ Rare Special Item ★",
      "rarity": "ancient"
  }
  ],

  "fracture_case": [
    {
      "name": "AK-47 | Legion of Anubis",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6GDG6D_uJ_t-l9AX_nzBhw4TvWwo6udC2QbgZyWcN2RuMP4xHrlYDnYezm7geP3d5FyH3gznQeY_Oe4QY"
    },
    {
      "name": "Desert Eagle | Printstream",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-DHG6e1f1iouRoQha_nBovp3OGmdeqInyVP1V0XsYlRbEI50a5wNyzZr605AyI3t5MmCSohylAuC89_a9cBoMY9UkV"
    },
    {
      "name": "XM1014 | Entombed",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMWad1OJzpN5rQzy2qhEutDWR1N-hI3yWbVRyD8YiEOVZ50TqmoKyZb7rtVfWgosQzX7-3X9K5yc4tr4cEf1yVvkijss"
    },
    {
      "name": "Glock-18 | Vogue",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-WF2KTzuBiseJ9cCW6khUz_T-GyNavdCqRawN1CMFwTOcO5hO7loXiY-zmsQKPi44QzHj22ikcvy11o7FVfFOBmfY"
    },
    {
      "name": "M4A4 | Tooth Fairy",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSMeWWC2mWwOdkqd5lRi67gVN35WyDwtv8IC-RblVxCpchQLIOuhK8xNG2YbnktAXZjthFxCiohntP8G81tOVu8Qhw"
    },
    {
      "name": "MP5-SD | Kitbash",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePF-JM-ED3SExOJ3vuVWQyy0lB4-jDGMnYftb32XZ1NyX5B5QuJcthi7k9K0Ye6zsQeP2IMRyiX4iSJLvC5q6-4HUaY7uvqAsG-atjE"
    },
    {
      "name": "Galil AR | Connexion",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfMXeYzut4uflWQyC0nQlpt22Dzd_4cS7Db1NzDZYkQuIKsBW4xt3jPurq7gPag4oXnCqrhipB7TErvbi_0k78nw"
    },
    {
      "name": "MAC-10 | Allure",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-aHWifz-B3j-1gSCGn209w626GnNuucC2SaFMiC8B3FuUJ5kW7wdPnZe7g7gyP2Y4Ry3_5hnlXrnE8RS4Y9Xw"
    },
    {
      "name": "Tec-9 | Brother",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SJ-WWHG6cze9JvOhuRz39xBsj4GmEyt-vIHjEbgJ2CsR2RONfu0K_lYXvZrjg4ADYg4wXzin42DQJsHgTPX1sbQ"
    },
    {
      "name": "MAG-7 | Monster Call",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSLf-dHXOV09F1se1lcCW6khUz_WncmIz8JHmTa1JyApd5FLEMsES-kNDhM-3i5QKM2Y5AzSr9jngY6Cp1o7FV7cAHRyI"
    },
    {
      "name": "PP-Bizon | Runic",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1c_M2sYb5iLs-bC2uc0-9_tOR7cCW6khUz_WiGm42pJXyUPwFzXJJxRrZf4xS7x4fvN7ix4gHX3o9HzX32hipBuyp1o7FVwd1bSh8"
    },
    {
      "name": "P90 | Freight",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V6diLuSSB2mV09F6ueZhW2fhk09ytjmDm4n8JHOebQEgCMAmQrEMuhi4k4W0MurntVHfid5GnC38kGoXuRB1lB54"
    },
    {
      "name": "P250 | Cassette",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSI_GAHWKE1etJvOhuRz39lkwltT7Ww4ugc3PGOwd0DpQkQbUPshbpm93lMuy25QGIjIwUn3_72DQJsHjyHnRH0Q"
    },
    {
      "name": "SSG 08 | Mainframe 001",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-eD26ex_x3veRWQyC0nQlptzjSntqgJS6Wbg5xDZVwTbUN5EO5ldWxYem04waP2IsUyX_5in4c6zErvbh54g-58w"
    },
    {
      "name": "SG 553 | Ol' Rusty",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-BG3SE2NF6ueZhW2e3xxt35GzSw9_8J3yePFIpCMEiRrJZukO7x4exZLiw4AGLiNgRy32rkGoXuZqsEgp2"
    },
    {
      "name": "P2000 | Gnarled",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PO_V7Q_cKDDMWuf0vpJp-57Qy2MmRQguynLyt38dXjDaA5zC5YlQ-Nc5BG5k93mP-jhsVeKiY8XmSr5iy5J7C1s6_FCD_TbNBDIDw"
    },
    {
      "name": "Negev | Ultralight",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-GAnOCwOJ_t-l9cCW6khUz_WSAnNj_cX6VZlQlX8Z0TeVc4RG5w4ayM-2w5wzYidhGyXr-iC0f6Cl1o7FVuI8WfEM"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient",
      "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/default_rare_item_png.png"
    }
  ],
  "revolution_case": [
    {
      "name": "M4A4 | Temukau",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSNPWeG2yR1NF6ueZhW2ewlBtx5W6AmYv9JS6XaAV1CJEmTeUL4UTpxNzjZO3jtgaIjN9ExCuskGoXuRnyRhBA"
    },
    {
      "name": "AK-47 | Head Shot",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6xoIfSsHW-f1dF-v-1mcCW6khUz_TzRnNigd3-SOg4lAsF1QOQN4xS4wdHnMu-0swaMjIxExSSoiyof6ih1o7FVGHIdVhw"
    },
    {
      "name": "M4A1-S | Emphorosaur-S",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-dsSi26mxoYtS-AlJXgHifOOV5kFJt4F-8KukXtldyyMLjjtVOIjIsWzXj8iylJ5ig6tbsKV_ItqaaB3gHfcepq28_00F4"
    },
    {
      "name": "AWP | Duality",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6hkLfKcMXSewOVzj-1gSCGn20p_62-HnN7_cH-XblQjDZYhR-FZsETqmoXjYry2s1DX3d5AyyT62ipXrnE8bpg5yZk"
    },
    {
      "name": "P90 | Neoqueen",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V6poL-GGC2Ke_uJ_t-l9ASyyxhl04zuDn4muInOXPAF2W5shQOAMs0G7xNfkZOuwswbej4JDnyvgznQe6S6_YqA"
    },
    {
      "name": "UMP-45 | Wild Child",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSI_yGGmSY_uV_s-pWQyC0nQlpt2iHmNyqd3KVOlB0D5YlTeZb5xjsx9PjZOjl4VCNgt1EnC77iSMf7jErvbhWyVIDbA"
    },
    {
      "name": "Glock-18 | Umbral Rabbit",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-eAWie_vx3suNgWxa_nBovp3PXyo76Ii_FPAQmDMYiTLYDthm_kdbmZry2slCLjoMQzC7_3y1J7nts_a9cBi_qumx0"
    },
    {
      "name": "MAC-10 | Sakkaku",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-AD2ybwOVjj-xsSyCmmFMk5mnRzdeqdSnCPVN2DpV3QeELtELrlIbiPrzqsVOMjdlBnySvjH5O8G81tOTP5a5f"
    },
    {
      "name": "R8 Revolver | Banana Cannon",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-RD2mRz-9JvOhuRz39kU4msjzdmd6peXKTOFd2DcchEOEP40btlt3lN7iz5FbeiNpFzi_83zQJsHgWY2btRg"
    },
    {
      "name": "P2000 | Wicked Sick",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMWOVwuJ_vuRWQyC0nQlp4jnTyNqodHyXOlQkDZtzF-UN4BjukYeyZuLn5Qbaj4NEzy3_3ywd5zErvbh-3lU8Iw"
    },
    {
      "name": "SG 553 | Cyberforce",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-QF2WV0-h5ouJscCW6khUz_Wjdntr6Iy6WbgEjA5MlRedctxG5kNKyNbi3sgTfi9oUnyj9234b5n51o7FVairOMAY"
    },
    {
      "name": "SCAR-20 | Fragments",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMs-VHGaXzOt4pPJWTSWylhYYvzSCkpu3dnmXbAZyX5pzQLQO4Ri_lIbgMOzktg2P3t8Uni32iHwc7i856r1UAL1lpPP6-FL_6g"
    },
    {
      "name": "MP9 | Featherweight",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V7d4MPWBAm6XyfpJvOhuRz39wB9x6jncwtyvd3jBPw8gCJFwR7YItRW8kNK0P--27wLe391NzCyq3zQJsHiOu4WQDA"
    },
    {
      "name": "MAG-7 | Insomnia",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSKf6AAWqeyO9JvOhuRz39wh4k4TzUnN_9cC6WO1J2DJdyROcI4BC9x9XmN-vj71eN34xAzC33hzQJsHiziLtbUA"
    },
    {
      "name": "Tec-9 | Rebel",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SJuKWC2OfzNF6ueZhW2fgkU0k5GmBzIn6eHjBagBxDZMhReYN5hC5ldbgNb7jtFbfgt5Ey3_3kGoXuRiiuNrn"
    },
    {
      "name": "P250 | Re.built",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSMvWRG26c1dF6ueZhW2flkRh_sjjXmNb8cCnDPVUnW5ByQ-JZ5hG_xN3gZuPltAHegogWzH7-kGoXuSIylluX"
    },
    {
      "name": "MP5-SD | Liquidation",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1Y-s2jePF-JM-CG26TytF6ufB8Ri2ygRQovQKJk4jxNWXBOgUmDsN5FrIM5xi4lIHgNe7q51Pdi4pGni-t2ntA5ids5LxRVPUj5OSJ2Kcl14st"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient",
      "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/default_rare_item_png.png"
    }
  ],
  "revolver_case": [
    {
      "name": "M4A4 | Royal Paladin",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSMv-KD2uv0v9jufNscCW6khUz_W-Az9b8d3LFZ1AnDMAjR-4CsBO9xofhNL_q4wLWjogUzyn43SxM73x1o7FVNN3FvCs"
    },
    {
      "name": "R8 Revolver | Fade",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2vaZtrIfSWMXWV1-F6puR7cCW6khUz_W2EnIuheSiVZgIgX8F3Ee9YthLuw9LjMePqswCL34kQzHj6iypPu351o7FV6jjqgC8"
    },
    {
      "name": "AK-47 | Point Disarray",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSMP-aAHOvxedlsfN7TjCMmRQguynLnIz_dXnEbFcoDsNzQLMN40S7mte0Zuzl5gbY34JEnnr52ChA7ytisPFCD_Rw7udDlA"
    },
    {
      "name": "P90 | Shapewood",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V7dlIeCWGWifxdF6ueZhW2fglEtz6zjWyo2uJXKeaAF1ApZ2F7YN5BC_w9TjYbzg5VCNg9pEnHiskGoXuQsJgcHb"
    },
    {
      "name": "G3SG1 | The Executioner",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-WFmKT1Pp_v-9sXRa_nBovp3PXmdyseC3DOFN1DJZ1TeIOtEKxmoG2PuKwsgOPgoxGzyr7jnhPvXlq_a9cBnGZIRC4"
    },
    {
      "name": "Tec-9 | Avalanche",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SIeaSAmaewuZzj-1gSCGn20Qi4m_cwtv8dy7Fbg8kXptyRuMJtEG4kdDuN-jq71ffj90QxCT22HxXrnE83F92lc4"
    },
    {
      "name": "Negev | Power Loader",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-aA3eRwvpJvOhuRz39lE914j-HyYmscHLBZ1J1X5NyEbYI5Be8k4DmYuzh4AGIgo0QzSqs3TQJsHgPf9N5RQ"
    },
    {
      "name": "Five-SeveN | Retrobution",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j_NsWzu8lwgzujKLpYPwJiPTcAByWJB4TOULsxS5wNfmPuzjtQHciYpHmCuqhypJvSlr4LsGBaEmr_bJz1aWW-JyGhc"
    },
    {
      "name": "XM1014 | Teclu Burner",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMW-f1dFkv-VWQyC0nQlptj_Tn9v4J3zEbVIjCZEkELRcska_x4DmNumz4QHWjYtNxSSqjSNAuzErvbjrIzaCAA"
    },
    {
      "name": "SG 553 | Tiger Moth",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-HB2CV09F7v_VhcCW6khUz_TnWn9n7cyqRPQ52DpN3QLEPshjrw9zlY-jjs1bWioMQxSj8hyxJu3l1o7FVwqXqqnE"
    },
    {
      "name": "PP-Bizon | Fuel Rod",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-dAX-Zzvtlj-1gSCGn2xkhsW7Rzt3_c3OePQElW8R3F7IJt0Lrl9e0ZO_r4wHZiINEyij323lXrnE8VjeQjNs"
    },
    {
      "name": "Desert Eagle | Corinthian",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKFsJ_yWMWSf0-d4pOlgTieMmRQguynLzNz4Iy2ebgUmDZB4QeEDskO5ktWzMrjm7wPd2IlGmCr_3XxBuClr4PFCD_To4zX47g"
    },
    {
      "name": "P2000 | Imperial",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0POjV7Q_cKDDMW6d0etkueBlcDu2kSIrujqNjsGrJH6XPQ9xAsZ5FLIDtBG5mtfhY7nl4gGNiosTzH792ntOvC1stbsDT-N7ra_mVv2F"
    },
    {
      "name": "R8 Revolver | Crimson Web",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2mcZt6JfKAMWuZxuZi_rdrHny2wkR_sDuHw4muJXuWOwZyAsdzTeNcu0S4ktfkP77htAOPiYlbjXKp8jg9HbM"
    },
    {
      "name": "Sawed-Off | Yorick",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2pe5t-IeeWCmiWx9F4teJ7QCSymx4ioQKJk4jxNWWTaQEnXsR1QOUItBC9mtTgMenntVCKjY4RyS79jy8b6iw5susEBfYs5OSJ2HUgdoR1"
    },
    {
      "name": "AUG | Ricochet",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_C9k7uepV654LfKfC1icyOl-pK9tHi-wxUp0sTyGw4z8dXqfb1IlWcd1QedctUbpwNHgPrnjtFeLj4tD02yg2euRXb9L"
    },
    {
      "name": "SCAR-20 | Outbreak",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk5-uRe6dsMqLDMW2Fz-l6tfNWQyC0nQlp5znXy9-vcXiWaA5yCMZ0ROUL5hXuwNfmY-_lsgSP2d0UzH-v3CtB7jErvbiWj5__Rg"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient",
      "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/default_rare_item_png.png"
    }
  ],
  "recoil_case": [
    {
      "name": "USP-S | Printstream",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_v5kue99XD2hkBwqjDGMnYftb3yUPFR0XsNyRrNc5kO5ltziMenr5lONj4kXyi2riywc7y9o5LtQAqQ7uvqAkScWnv4"
    },
    {
      "name": "AWP | Chromatic Aberration",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6dlMv-eD1iAyOB9j-1gSCGn2x50tT_Tm9f4cXORPA4oWJckFOMLtha_x9e1Nu-35QfbjYtHyiythitXrnE8ylr09zg"
    },
    {
      "name": "AK-47 | Ice Coaled",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-UGm-Zz-llj-1gSCGn2x4l5z_RyNj6JXnEbgFzXMYjEOUIsBe5m9exP-zg4leMj4pGxXn7jCJXrnE84asPq_0"
    },
    {
      "name": "Sawed-Off | Kiss♥Love",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F9ufJ6QyalkCIrujqNjsGoI3-QZwZzD5F5TbUDsBi_xtW1NuqwsVaPjoxFmST93ClI6S1osuYDT-N7rb6xkGzX"
    },
    {
      "name": "P250 | Visions",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSNvmAB2ie0tF6ueZhW2fmzERx5jyHm4v_dXvGaQR2WJF2QrIMsxW_w9PvN-zhtgXXiokWn3_6kGoXuc_iGAKZ"
    },
    {
      "name": "SG 553 | Dragon Tech",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-QF2WV09FyouBuQCeMmRQguynLw9ygIHnGbgYlDpciEeBYsEPux9ThMuOz4ACLjY1FmX-viitMvCZp5_FCD_QeAJd5TA"
    },
    {
      "name": "Dual Berettas | Flora Carnivora",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2qfaVhH_WfB3OV0tFzpuhlcC-_mg8mjDGMnYftbynGOA4lDZd4FOZYuxi6kdPvZuLrsgTW2IIQxXn7iSNJ6ic96-YCB_I7uvqA4cV5qzc"
    },
    {
      "name": "R8 Revolver | Crazy 8",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_JeacAnGV09FmpfN5QyyMkBEupzi6lob-KT-JZlJ0X5MhEOFcthO9wIHuZrng5A3XgotFmSv82ClAuHo46-wHU6p38rqX0V9gOeDH5A"
    },
    {
      "name": "P90 | Vent Rush",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V7BsLvefC2OvzedxuPUnTXywwElz52XXzIz4dn2RalcoC8FzQrJfsRe-moG0YeK2sQPZ3YpEmzK-0H18Z6zceQ"
    },
    {
      "name": "M249 | Downtown",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SJP-EAHGf1etJvOhuRz39wUh-5GuGz4mrJHuSbg4jWJp1FLINsRCxwdDuZezm7leK3d5GmSr_jTQJsHj3YwoNRA"
    },
    {
      "name": "Glock-18 | Winterized",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK8-WAm6ExNF1sexmcCW6khUz_W6Azdn6eCrBalcjXJpzE7EO5xa_l4DuNu6ws1Hb2IgUn32si39B5y11o7FVC5qcAFg"
    },
    {
      "name": "M4A4 | Poly Mag",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJfyaGmKv1e91pOhqTiWMmRQguynLzY2pIi2QawR0CpdwTOdeuhXrw9XjZeq04QLYjIlFxSz9hn9MvCw44vFCD_Q07cip4Q"
    },
    {
      "name": "FAMAS | Meow 36",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-QAXWA_uNzv_ZWQyC0nQlp6jvVztaudCnEbAUgDsckFOAJsBLtlN2yP7zqslGMiooXyCX43H8Y5zErvbiVlZtU7g"
    },
    {
      "name": "Galil AR | Destroyer",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWOV0vpkv_hsXRa_nBovp3PWwougcHvBP1IpWJohEOdc5hLrwNTiZbjh7gbaithNnnqsjX4f7y8-_a9cBt1aCBEk"
    },
    {
      "name": "Negev | Drop Me",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-QAmKR09Flu_hWQyC0nQlpsDnVy4mpcSiQOlB2CJRxR-AK4BDrw4azN-225lfc2t0Tznr6iX4f6zErvbg1B8-kIw"
    },
    {
      "name": "MAC-10 | Monkeyflage",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-eAWmbxPdwvOBuSha_nBovp3OBzdisJHPDaQ5xXpF2Ru4M5BTtlYHnYr7h5lbZg4gQzC_22ikfvSZt_a9cBiKJuAuZ"
    },
    {
      "name": "UMP-45 | Roadblock",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1c_M27ZbRSMv-SCmWczu19j-1gSCGn2xgi5GnWmdmodXyUbwUhA5RyF-FcthS8w4ayMrjgtAzX2t9Byir83HtXrnE8YWMltLM"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient",
      "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/default_rare_item_png.png"
    }
  ],
  "operation_breakout_weapon_case": [
    {
      "name": "M4A1-S | Cyrex",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-JwXSyrqhEutDWR1N77cimSbQQgC8F5QLYCsELpltTnZuvk7wbcjdhDzy_43yMb6ilvt7kcEf1yDWu2yf8"
    },
    {
      "name": "P90 | Asiimov",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-JaV-KfmeAXGvzedxuPUnTSjikRgksjuBzoz4dXLFb1QoC8QlTLQD4EPqk4LvN-Pns1aMioNBzTK-0H3gQVv65g"
    },
    {
      "name": "Glock-18 | Water Elemental",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK72fB3aFxP11te99cCW6khUz_TjVyompc3-QOFR2DJQkFOMJtBbqk9LlY-7n5QLZjtkTxCWqhixPv311o7FVIf8eASQ"
    },
    {
      "name": "Desert Eagle | Conspiracy",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ_yWMWaF0-tjo95lRi67gVMk4WTSm9moI3-QPVBxDJByQOJe40O6k4fnM-zgsQXci4gUyH3_3CMa8G81tJHuULJI"
    },
    {
      "name": "Five-SeveN | Fowl Play",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRabVSdaesCGKR1eZzovJWQyC0nQlptm_Vw9ercnOUaA8lA5skFuIPsxPqmtXkNu205lfYiN8XnCyvj3hNvDErvbiIo1idJQ"
    },
    {
      "name": "Nova | Koi",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSK_-aMWuZxuZi_rBqGCu3xEoksm_SzomhcHiQP1QjD8BxQuAN50TtlIK1Yri05lDeiY5bjXKpu6W3YF0"
    },
    {
      "name": "CZ75-Auto | Tigris",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tP_FsbeSaCWKC_uJ_t-l9ASvil0R15WjUmYmqc33CaQ91W5QlRbVetETtwNC1P-u34g2L2dpEmS_gznQebcVQ6rs"
    },
    {
      "name": "P250 | Supernova",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0PCnfLBoMuOEC2KE_uJ_t-l9AXzlwk5zsGnWz46uICjCPAZ2CZF0QO8LtBjtkNaxZrji7wbY2tkUySXgznQe4Iqu8Lg"
    },
    {
      "name": "PP-Bizon | Osiris",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLr2cHW6CyP1JvOhuRz39xUxx6jiBz42rIHjBbAcnWZcjROcJsxjtmoXmNe_k5QHajtlNyC2r3zQJsHh050JUDA"
    },
    {
      "name": "SSG 08 | Abyss",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1a_s2ibbJkIeSbD2mvzedxuPUnH3_jzE1y4TvQyIr9JyieZlckCsRxF-8K50bsxN3gZOzktAzc2IJEzDK-0H1XlSI8xg"
    },
    {
      "name": "MP7 | Urban Hazard",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5JadiLf2SAGOV09F6ueZhW2fgx0gl4WTczdj7I3LFaQYjDcQiE-Beuhe6xIXnP-_l41eKi9pEyH79kGoXuW6iY_I1"
    },
    {
      "name": "P2000 | Ivory",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMW6Gzvxvj-1gSCGn20gism3dz96pc3KVOgYoCpR4TOFZsxbsxNzlYejl7lPWiIJBmX6t235XrnE8r5B4jsA"
    },
    {
      "name": "Negev | Desert-Strike",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-HB3ORz_1iv_NkcCW6khUz_WnUz42tI3-WOw5zDpAmQOQD4ELskoDlMeni4gTWjoNNmSj_33kcvC51o7FVXp6G1h4"
    },
    {
      "name": "UMP-45 | Labyrinth",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1T9s2iYapoM8-cHGaexutJvOhuRz39wRtx4WXczNupdS2XawApD5okQLEK5hm4kYHvYrjm5FDbj4MWnnn4ijQJsHh9pjg_2g"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient",
      "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/default_rare_item_png.png"
    }
  ],
  "fever_case": [
    {
      "name": "FAMAS | Bad Trip",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1d7v-ve5tvIfSHHG6A_uJ_t-l9AX6xzExytWndzdj6eCrGb1MkWZB2TOBc4xK8mtHkZezrsQOPjoITyi_gznQezHhrR0c"
    },
    {
      "name": "AK-47 | Searing Rage",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQu6WRbbx9LP-AB3GV_uJ_t-l9AXu2lk1xsD-EnI3_JHmeaAV1CZB1RbEJtxfuxNHuMuq251PY3o4UxXjgznQeg4Qz-rg"
    },
    {
      "name": "Glock-18 | Shinobu",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5t-KPmdAWWF_uJ_t-l9AX6ylh5w4mTcwtahdS2VOgRzWJsjEOQL5EWxwNblZeK2tVPXitlDmyvgznQeC7fvQL8"
    },
    {
      "name": "UMP-45 | K.O. Factory",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1O4uL6PZtiLPSsDWaC1eF5vt5lRi67gVN2tWXTzI6tc3rGPQ4kWJUiQrJf4RPskIW2ZO3r4VaKi9hFyX-qhy0a8G81tA_18T9p"
    },
    {
      "name": "Desert Eagle | Serpent Strike",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6_evb6hoH-OdD2yV_v53pPVsXSeMmRQguynLzdmsIHOVPVciXMN3QuVeuxexmtHuP77m7gDd34kRxXj_3ChKvS9p5fFCD_SJMmxOXA"
    },
    {
      "name": "Zeus x27 | Tosal",
      "rarity": "restricted"
    },
    {
      "name": "Nova | Rising Sun",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwixU-fOReq1-Kf6UMXSFz9F6ueZhW2eyzB9z4WjTzt77JXKVaQcnC5sjTLEMthDpwdzkMr_lsVbW34lGmyj5kGoXuV-iSbwM"
    },
    {
      "name": "Galil AR | Control",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PWvZK1hH_OcAHOCzuJJo_V7RiK2qhEutDWR1Nmvcn6RPFVxW5txTbRZuxDuxNKzZu2x7wCMiNpExCSshyof7Xlt5-scEf1y6paUA5M"
    },
    {
      "name": "P90 | Wave Breaker",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf7XsL0PChZ7d5H_KfG2KvzedxuPUnTHrlzU9xt2qHzd-rJ3yQb1cmXJNzF-Vc5BS6wdLjMe60tAyP3dhNzTK-0H3NvEQllg"
    },
    {
      "name": "M4A4 | Choppa",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRb7ZoJf6sDWadztF6ueZhW2fjl05-6mzVmdmgcHOTZgIhXpJ1RO5c4Bjql9DjMunhsgOL34gUnnr-kGoXuTonsfJ3"
    },
    {
      "name": "MAG-7 | Resupply",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wi9a6KWRaalgL8-RAX-vzedxuPUnTHjgkxwj52SHyImqcX2fO1AhDMNxEe4I4RWwkIXgMO60sQPeiYgQmTK-0H2GsAjMqQ"
    },
    {
      "name": "SSG 08 | Memorial",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1I_PX-MJtvMuWHD2uZ0vpJvOhuRz39x0UlsWmEnt37IHyfaFAkWZR5RuALtRKxlYKxMLnn4leL3t5FmSv9ijQJsHj6GwByAQ"
    },
    {
      "name": "P2000 | Sure Grip",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0OL8Y5trMvGQGmac_uJ_t-l9AS2wwxx06mTUw9b7JH2RZlQoDZYkRLQD5hW4lNPiYePktgzWj45CmSzgznQeV1pFuQ0"
    },
    {
      "name": "USP-S | PC-GRN",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODHViS0_titedmXSq2qho1tjiLpYPwJiPTcFcoCpV2F-Nc4xXpwNPhZeLg5AffiIxNynj2jylP53xp6ugHU6Ig__XJz1aWMWkGKhU"
    },
    {
      "name": "MP9 | Nexus",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f8DIC0PyrcLF-H_yaCW-Ej7ohs7Q5FnDqx0t152XdzI36cCnDaAZyDJNzRuVYsBa4kYHgZbyx4ALAy9USEWUfUe0"
    },
    {
      "name": "XM1014 | Mockingbird",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk9___OPU5H_2cDWyZz-l0ufNtcCW6khUz_T-AnNagJH3FbwQnCsEmTeEMs0aww9biMby3tleKjtkQmSX-2yMfv311o7FVNa3OfdQ"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "csgo_weapon_case": [
    {
      "name": "AWP | Lightning Strike",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k4_upYLBjKf6UMWaH0dF6ueZhW2frwU1_sW2EmNyvc32RZwMpCpcjQ-EJ4xbtmt3gYezk4wzb3tpAy3mrkGoXubsGIfVN"
    },
    {
      "name": "AK-47 | Case Hardened",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNK0P2nZKFpH_yaCW-Ej7sk5bE8Sn-2lEpz4zndzoyvdHuUPwFzWZYiE7EK4Bi4k9TlY-y24FbAy9USGSiZd5Q"
    },
    {
      "name": "Desert Eagle | Hypnotic",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7vORfqF_NPmUAVicyOl-pK9qSyyywxgjtmnVytyocnLGPA4iWcYmRLYIu0S-xtbuMLjg51DXjoJC02yg2VjGnh4J"
    },
    {
      "name": "Glock-18 | Dragon Tattoo",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a4s2qeqVqL_6sCWufwuVJvOhuRz39xUl-6miDzI37dHyXOlIkA8MmROVfshO9w9G1Ye-ztgPX34tEyi74jjQJsHi_DRfxVg"
    },
    {
      "name": "USP-S | Dark Water",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSIf2sFGKS0-9JtOB7RBa_nBovp3OHy9v8J3vFbgIhC5UmQ7UIsxm7wNDnNr_rswOMiNlGmCWoiH9Juis9_a9cBl2xnYuj"
    },
    {
      "name": "M4A1-S | Dark Water",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GeMX2Vw_x3j-VoXSKMmRQguynLzI6td3-TPQAlD5slR-EJ5hDux9XmMe7i71CI2t8UzSuthi9OvSlo6vFCD_TltxSe0A"
    },
    {
      "name": "SG 553 | Ultraviolet",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1I4M2-fbZ9LPWsAm6Xyfo44bQ-Tn7gwRt-t2uAw96tIn7FOAF1CsckQLUJ4xXskdO2NLzrtAyIi5UFk3tU_MwgmA"
    },
    {
      "name": "AUG | Wings",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf9Ttk6fevfKxoMuOsD3KX_uJ_t-l9AX7qzE5_sGmEw9uoJCrBOgMoDsN2ReMI4EPrm4fvY-m04ASPgt8Uz3_gznQePzx-iqc"
    },
    {
      "name": "MP7 | Skulls",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf9Ttk_Pm7ZKh-H_yaCW-Ej7l35OBoTCrmzUQht2mDwon7cHuWPFUlDcFxQ7EDtxbpx4W1Y-LltAfAy9USYNky6pY"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "glove_case": [
    {
      "name": "SSG 08 | Dragonfire",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-XHGaXzuBwufNscDqwmg0ijDGMnYftbyrFPVAoWcQjELQOuxO4k4e1N-nnsQfW2I5Mz3ivi3wb7Stj5ukAUKY7uvqAqS55_Pw"
    },
    {
      "name": "M4A4 | Buzz Kill",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSM_WQGmiC_uJ_t-l9AX22kBh0tm3Qn92qdS7GPARyW5t0QLQD4xi6w9XkZe3jsgDW3ogUnH3gznQeqfpfmso"
    },
    {
      "name": "FAMAS | Mecha Industries",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-eC2SYwNF6ueZhW2ewwx4hsm3dz46heSjCPVUjC8chEOYMtxOwkNHiYb63swXY3Y9Nn32skGoXuc3DGOrc"
    },
    {
      "name": "P90 | Shallow Grave",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V7dlIfyfAXCvxvx3puRWQyC0nQlpsWzUyIqvcCiVPFQnW8YmEO4P5xi6xNS2Num35FbX34lCzX7_hytK5zErvbi02RizsA"
    },
    {
      "name": "Sawed-Off | Wasteland Princess",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt6MM-AD3CVxeFwtt5lRi67gVMksWuEmduuIH2fPwUkWJojQuMP5xi8lNzlY-234lDag4xFnin_jihN8G81tH9UxALW"
    },
    {
      "name": "USP-S | Cyrex",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_u1vouRxcCW6khUz_TjdzdmsJyiTZg8kX8N4ELUP5EPsw9G1YeLn5VTXjY0WxS6rhiIYuCd1o7FV2N83Spg"
    },
    {
      "name": "M4A1-S | Flashback",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9Jtu1oXCGxlB4sjDGMnYftb3yVPQFyDMB3EbJZ5xC4kNPvMOO35AHW3d1AnC_3iHlNuytqtuYDVfI7uvqAZWXE-YM"
    },
    {
      "name": "Dual Berettas | Royal Consorts",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_KWHGKE1e9lj-ZmQy22myIxtjOMmYrGLSLANkI-C5AjFOcM5EaxxtTmPrnl4Q2Ki91Eyyz32y1Luyk44u4LUqEjr_ff3BaBb-MmOWu8Lw"
    },
    {
      "name": "G3SG1 | Stinger",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-FB3eV09Fvte1lQD6MmRQguynLyo6rdH-RPAZ0D8chQeIL50TukdK2P-_rtFPejN8WmH34jylJvHtq5fFCD_TvHmnxYA"
    },
    {
      "name": "Nova | Gila",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiNW0PyhfqVSM_GdClicyOl-pK8wHnrrwU8hsW2DyoqgeSieblIkDJZwQu8Cs0TultLgP76051SPid9N02yg2S7-0Sao"
    },
    {
      "name": "MP7 | Cirrus",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf-jFk6fugaahSMP-cAmOVwOpg4t5lRi67gVMj5j6Dwtaocy6UOAIgApNyQrQOshS7lIXlMbvqslHfi41Eyi7823xK8G81tHGGql6L"
    },
    {
      "name": "Glock-18 | Ironwork",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a_s2pZKtuK8-XD3WbjOh3vO1WQyC0nQlp5jmEmNaodH6VbwMnApshEOcPskOww4e0N-qz5lPZ2YlGyCSviika6zErvbhhWFzqpw"
    },
    {
      "name": "Galil AR | Black Sand",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWaCjO13ve5WQyC0nQlp5T7dzoqpeX3FZ1R2DZd4Qe4CtRS_k9y0Ye7qtQOP2oxAyX73iytK6TErvbi0QhR0PQ"
    },
    {
      "name": "P2000 | Turf",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PW9V7Q_cKDDQ3SAzvxij-1gSCGn20h14mSByd6vJXmUagQoXpMkQecN40Xsm4DhM-3k4lTY340UxCn53HhXrnE88VIlnLo"
    },
    {
      "name": "CZ75-Auto | Polymer",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2tcrI_H_2VMWuZxuZi_rcwSnHjwxgh527SzI6oIHKUZ1dxA8ckTbUCskG6ldTuY-nh5FTf34JbjXKpj6qz0B4"
    },
    {
      "name": "MP9 | Sand Scale",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_CNk5_uqbelgMKmsAm6Xyfo4tuA9TnDrzB5w5GTczo74cnyTblAkWcclRuYIuhXplde2ZePl4FTc2ZUFk3tXKn8xpQ"
    },
    {
      "name": "MAG-7 | Sonar",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiNW0P-vb_NSLfGfCGiCzNF6ueZhW2fgxEol4TnQyo2qd3qTPwQhD5d0F-YPuhHpwNHlZLvi5VTY3dhAy339kGoXufaFAiYQ"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "gallery_case": [
    {
      "name": "M4A1-S | Vaporwave",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_3HDzaD_vh3oO57WCilkCIrujqNjsH_In7DZgYnWcAiR-MJshO6koDlN7vhsQyLi41HySX6iXlAvCZrsb0HT-N7rW-9qIHE"
    },
    {
      "name": "Glock-18 | Gold Toof",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5tuKP-eHmKC_uJ_t-l9ASvik00m5TmEzd-geSiQPARxX5IiTLIMtBW4l9zmNuPr4VbbjItHxC_gznQeqLQCTjk"
    },
    {
      "name": "UMP-45 | Neo-Noir",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1O4uL6PZtjJf-sAGiZ09F6ueZhW2flw0R0sGrcy4z9cn6XagVxCpR4F7Rb5BPplIbjY7vj4AOLjt0TzSj9kGoXuYU0ZhpI"
    },
    {
      "name": "P250 | Epicenter",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwjIJuqKRYal9IfOHMWuZxuZi_rg5TnvmzB916m_dm92pdH6eOwJ2DpVyQ7JftUXtwIK2MLiz7wTXjYtbjXKpkd0OdLY"
    },
    {
      "name": "AK-47 | The Outsiders",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQu6WRfJtvNeOsAm6Xyfo4tbg7G3-wxxwl5mzRyYqodSrBagMjCZJxELMPthi8lNLgYuzltgHc3ZUFk3sO-7HKrg"
    },
    {
      "name": "SSG 08 | Rapid Transit",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1I_PX-MJt5MvGdHW6E_vl-ufVscCW6khUz_WTSw479d3vDalIkCJNzFuIN4RHqw9K2P7nktQHf340Wyn-vh3wY7Sd1o7FV_lj0Yvg"
    },
    {
      "name": "P90 | Randy Rush",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf7XsL0OCvZqB0H-KGHW-vzedxuPUnGCy3lhsj6zmAyYn6eXyQbwMhApAmFu8C5xTpktHjMejl71aPjtkQnjK-0H3AcMEIag"
    },
    {
      "name": "MAC-10 | Saibā Oni",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1W7vH_OJtiOvGYB1icyOl-pK89HXuxkRt2627Syt2udn6TZlJyW5R0QuMKsRm6lNflNO3g7lfbi49H02yg2Yk7YeQ4"
    },
    {
      "name": "M4A4 | Turbine",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRbrF-Kf-dMWuZxuZi_rRtGiriwUgh5m6Bn9z4IHLEOA4gDpZxQOULsUW9k4eyMOLitQzd3opbjXKpOa4i6Kc"
    },
    {
      "name": "Dual Berettas | Hydro Strike",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1f-vOiV6FhKeSWMW-Jxfx5j_J9XSC4kCIrujqNjsGgeHrGa1B2W5t1Q7NetkOwk4C2Ybzq4FDWjI0TzS6viilLv3tp6rwLT-N7rWtjCU_P"
    },
    {
      "name": "Desert Eagle | Calligraffiti",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6_evb6hoH_OSAmuZxvx3tudWQyC0nQlp52rQmNv_IC7DaFR0ApB4QbMKs0W8k9zuPr6xtAGMjoITmymohyMa6jErvbhrxmEjWA"
    },
    {
      "name": "USP-S | 27",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSNeODMWGZxOJyj_JnTiK2qhEutDWR1Nf8dSieZlciX5skF-INsRe_l9HuMurn5QDZ2tgTnyT82ysduHo_tekcEf1yefDz68I"
    },
    {
      "name": "AUG | Luxe Trim",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_Ddc0OK7bqJoMs-fB2CY1aAntOUwSivrwksmtTyBnI2udijFZ1cmDZt0QeUCsRG7xoWzNu3r5gPelcsbmlZvKhNj"
    },
    {
      "name": "R8 Revolver | Tango",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c28MJt_L-OWHViRz-pJt_RnXBa_nBovp3PSm4urdy7Da1UjWJolF-RbshfqldXuMuqxsgGKi45HmXj4iS5IuCxi_a9cBo6oJFLo"
    },
    {
      "name": "MP5-SD | Statics",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1W_6eRe7BsNPmQHViSzftzj-1gSCGn20l252_Tz478Jy3EbAYnX8FzFuAI5kO5wNK1P-uz4lSP2doRyS_6iipXrnE8LnlBQOA"
    },
    {
      "name": "SCAR-20 | Trail Blazer",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk_PGvevY9H_aGHH6v1eFmv95lRi67gVN_5D6Bzo38cXOVOA52DZolReBbt0K5k9DvM-Pr4VHXjI9Enn6sjHkb8G81tIsMy8R0"
    },
    {
      "name": "M249 | Hypnosis",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wi8Ju6uRYL19Lv-AB3SvzedxuPUnTny1wkgm5znWyon4dC2TPFRxX8AmROcLthW8kdTgMrm051fcjIsQzTK-0H3IfNSRpg"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "fracture_case": [
    {
      "name": "AK-47 | Legion of Anubis",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6GDG6D_uJ_t-l9AX_nzBhw4TvWwo6udC2QbgZyWcN2RuMP4xHrlYDnYezm7geP3d5FyH3gznQeY_Oe4QY"
    },
    {
      "name": "Desert Eagle | Printstream",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-DHG6e1f1iouRoQha_nBovp3OGmdeqInyVP1V0XsYlRbEI50a5wNyzZr605AyI3t5MmCSohylAuC89_a9cBoMY9UkV"
    },
    {
      "name": "XM1014 | Entombed",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMWad1OJzpN5rQzy2qhEutDWR1N-hI3yWbVRyD8YiEOVZ50TqmoKyZb7rtVfWgosQzX7-3X9K5yc4tr4cEf1yVvkijss"
    },
    {
      "name": "Glock-18 | Vogue",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-WF2KTzuBiseJ9cCW6khUz_T-GyNavdCqRawN1CMFwTOcO5hO7loXiY-zmsQKPi44QzHj22ikcvy11o7FVfFOBmfY"
    },
    {
      "name": "M4A4 | Tooth Fairy",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSMeWWC2mWwOdkqd5lRi67gVN35WyDwtv8IC-RblVxCpchQLIOuhK8xNG2YbnktAXZjthFxCiohntP8G81tOVu8Qhw"
    },
    {
      "name": "MAC-10 | Allure",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-aHWifz-B3j-1gSCGn209w626GnNuucC2SaFMiC8B3FuUJ5kW7wdPnZe7g7gyP2Y4Ry3_5hnlXrnE8RS4Y9Xw"
    },
    {
      "name": "Galil AR | Connexion",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfMXeYzut4uflWQyC0nQlpt22Dzd_4cS7Db1NzDZYkQuIKsBW4xt3jPurq7gPag4oXnCqrhipB7TErvbi_0k78nw"
    },
    {
      "name": "Tec-9 | Brother",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SJ-WWHG6cze9JvOhuRz39xBsj4GmEyt-vIHjEbgJ2CsR2RONfu0K_lYXvZrjg4ADYg4wXzin42DQJsHgTPX1sbQ"
    },
    {
      "name": "MP5-SD | Kitbash",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePF-JM-ED3SExOJ3vuVWQyy0lB4-jDGMnYftb32XZ1NyX5B5QuJcthi7k9K0Ye6zsQeP2IMRyiX4iSJLvC5q6-4HUaY7uvqAsG-atjE"
    },
    {
      "name": "MAG-7 | Monster Call",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSLf-dHXOV09F1se1lcCW6khUz_WncmIz8JHmTa1JyApd5FLEMsES-kNDhM-3i5QKM2Y5AzSr9jngY6Cp1o7FV7cAHRyI"
    },
    {
      "name": "P250 | Cassette",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSI_GAHWKE1etJvOhuRz39lkwltT7Ww4ugc3PGOwd0DpQkQbUPshbpm93lMuy25QGIjIwUn3_72DQJsHjyHnRH0Q"
    },
    {
      "name": "SG 553 | Ol' Rusty",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-BG3SE2NF6ueZhW2e3xxt35GzSw9_8J3yePFIpCMEiRrJZukO7x4exZLiw4AGLiNgRy32rkGoXuZqsEgp2"
    },
    {
      "name": "SSG 08 | Mainframe 001",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-eD26ex_x3veRWQyC0nQlptzjSntqgJS6Wbg5xDZVwTbUN5EO5ldWxYem04waP2IsUyX_5in4c6zErvbh54g-58w"
    },
    {
      "name": "P2000 | Gnarled",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PO_V7Q_cKDDMWuf0vpJp-57Qy2MmRQguynLyt38dXjDaA5zC5YlQ-Nc5BG5k93mP-jhsVeKiY8XmSr5iy5J7C1s6_FCD_TbNBDIDw"
    },
    {
      "name": "P90 | Freight",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V6diLuSSB2mV09F6ueZhW2fhk09ytjmDm4n8JHOebQEgCMAmQrEMuhi4k4W0MurntVHfid5GnC38kGoXuRB1lB54"
    },
    {
      "name": "PP-Bizon | Runic",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1c_M2sYb5iLs-bC2uc0-9_tOR7cCW6khUz_WiGm42pJXyUPwFzXJJxRrZf4xS7x4fvN7ix4gHX3o9HzX32hipBuyp1o7FVwd1bSh8"
    },
    {
      "name": "Negev | Ultralight",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-GAnOCwOJ_t-l9cCW6khUz_WSAnNj_cX6VZlQlX8Z0TeVc4RG5w4ayM-2w5wzYidhGyXr-iC0f6Cl1o7FVuI8WfEM"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "clutch_case": [
    {
      "name": "M4A4 | Neo-Noir",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSLvWcMWmfyPxJvOhuRz39wE1142vSztmvInvBOgV0W5R1FLYNuxW4wIbgNrmx4g2Kj4tMmCX93zQJsHgJr0dqFw"
    },
    {
      "name": "MP7 | Bloodsport",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf-jFk4uL5V6ZhL_-XHXef0_pJvOhuRz39lxsk4W3Ry96pIHrFOgElDZN2Q-9etUSwk4LnYu3h5wLejYwWxSr43zQJsHiIGMoJQA"
    },
    {
      "name": "USP-S | Cortex",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_u1jpN5lRi67gVNz4G7Qm938cS_Da1AhXpB1EeVb4xm4mtDjN7vj4A3b2NpGyCr52i4Y8G81tMzdoYZ7"
    },
    {
      "name": "AWP | Mortis",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6BoIeSbMWuZxuZi_rNtHiuwwRwismWEnNn8JymSZgUiDpd3Ru9ZsxG-xNy2NLzn41DWg41bjXKp5oOAt0A"
    },
    {
      "name": "AUG | Stymphalian",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7d5Of2DBmacyO94j-NgXS2gqhEutDWR1Iz6cnqXOA8mD5shTOEPuhm-moHlZLnj4gLWjdhEzimr2n8bvC5q4e8cEf1yYjdCpmM"
    },
    {
      "name": "Glock-18 | Moonrise",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a7s2pZKtuK8_CVliF0-x3vt5kQCa9qhsipTiXpYPwJiPTcANzXJNyFOEMthXsktHhMLzl4FaK3toWn3iqhi9BvHw9su5UU6Zw-_bJz1aWcX-Jd_0"
    },
    {
      "name": "MAG-7 | SWAG-7",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiNK0P-vb_NSM-eSCTCvzedxuPUnHirhkxhxtzvRzI38dnLEOlQnW5N1F-FZtRG6kYLvPu205ADaj40RnDK-0H0F4y2tgg"
    },
    {
      "name": "UMP-45 | Arctic Wolf",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-EBm6ExNFwse9ucCW6khUz_WiGzY6pJyjCZwN1A5p5Q-MCuxa7ldW0Ne3ntQHW2YpFmSv63S1B73t1o7FVFkKgM50"
    },
    {
      "name": "Negev | Lionfish",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1I_82gbaNoNs-fB2iex-dluN5lRi67gVNx62XXzI74InPGbQMpDpMiRLMOsRG4lNXvPuritFeN3YpMzSSo2yhN8G81tOHyHega"
    },
    {
      "name": "Nova | Wild Six",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiVI0PyhfqVSIf6QBmiCyPpzj-1gSCGn20t-4jnUzI7_IHifblIpDJJzF7UP5kPpxtHgMu62tAPZjY4Ryn72hnlXrnE8sT3rGLc"
    },
    {
      "name": "Five-SeveN | Flame Test",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRb7dSJvmFC3SV1-t4j-lmWxahmhkYpTSKlortHifOOV5kFJt1FOVYsBC_lobmNe3q4AOK3dhDnimrhyoa7i9ssO4CU6F0rvWBiwvfcepqcNk1MwM"
    },
    {
      "name": "SG 553 | Aloha",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1I_829b_E-c8-SAmiYwNF6ueZhW2fjxE5x5W_SnNz8eXmQaVN2WJUmF7RZuhS8wYbiZeO04VPa3YlCmHr7kGoXuWs6bs2V"
    },
    {
      "name": "R8 Revolver | Grip",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_JeacAnGV09FiouRoSxa_nBovp3PTwt-hJH-WbFMnWJdwRuUPtEG7k93iN7uw4wLf2I9FxCr733hBvXxj_a9cBlQvB05B"
    },
    {
      "name": "XM1014 | Oxide Blaze",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMWiIyOpzj-NlTjO2qhEutDWR1N-tJ3zDOFAoDZMhRrNbsUa_x9fuMrvrsgDW3YJGxHn22ixO6C9j5uscEf1ygXv9Ksw"
    },
    {
      "name": "MP9 | Black Sand",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6ZhIfOYMXSRz-pJvOhuRz39xxsj5GWDn9z6d3rCOFV1CJpwTO4IsEG8x4WzPr6xtlTZ2YlEzX-vhzQJsHjCKAg7iw"
    },
    {
      "name": "PP-Bizon | Night Riot",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-BB2iE_uJ_t-l9AXqxzUQisWTWz9egc3KWbAJ0XJt5Q7YN5xnuxNDiN7iz4waLgtkWzS7gznQeDJdgNeg"
    },
    {
      "name": "P2000 | Urban Hazard",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMXKCw-94j-loVSihkSIrujqNjsGsJXnFPw4gCcZ1TOIPt0LukoG2ZuqxtAXaj4sTzy6q3SpN7C9u6-YCT-N7rcTI-daA"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "spectrum_2_case": [
    {
      "name": "AK-47 | The Empress",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSJf2DHGKD0tF6ueZhW2exxEt152rWzI7_Ii-Ubw90DMB0Ee4C5xOwx9GxZbjk71PXgogWn36tkGoXudZeYvlo"
    },
    {
      "name": "P250 | See Ya Later",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSI-mRC3WT0-F1j-1gSCGn2x9ytmzWnN6pInjGOwMlDZp0EORe5BHsx93lP7zr5wzbiI5AyXr_jS9XrnE8gQrIgng"
    },
    {
      "name": "M4A1-S | Leaded Glass",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9Jo-loWz22hyIrujqNjsH8dn6ePwB2DpEmFuAMt0HulYa1Nu2z4QWPjt9NnCX63H9M5ys96r1QT-N7rZDTLd1E"
    },
    {
      "name": "PP-Bizon | High Roller",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-SAmuvyOBJvOhuRz39kEx1smnczomgJX2XbA4hC8BzRe9etxntldblMuyx5wfc2ooWni7_3DQJsHhZ08njvA"
    },
    {
      "name": "R8 Revolver | Llama Cannon",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-fAmadwO13vu9mQRa_nBovp3OEz9n7JH-UPwEoA5t2TLFYtBmxlNzhYuOztgHZjo9Mzyqq3C9O63o5_a9cBr5nn1G8"
    },
    {
      "name": "CZ75-Auto | Tacticat",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4H-SSDXOZwu9ij-1gSCGn2x4k5zvVm9z8IH7FZwFyCJckR7NfshSwwNGyMLzn41fejINHn3r6jy5XrnE8D8_CCNo"
    },
    {
      "name": "UMP-45 | Exposure",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-LQ3WR2NF7seJhRie2qhEutDWR1Nutci2WbwBzWZFyF-Fetka_ltbgM7nh5AKKiYoRmXr73H4b7ilvsekcEf1y88bI5DM"
    },
    {
      "name": "SG 553 | Phantom",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-DBmae1eF7j-1gSCGn204k5WXSz4ysJSnDPQ5xDsZ0Ru4PtUKxw9XhMO-0tAON3YpMyS-v23lXrnE80YpLcJc"
    },
    {
      "name": "MAC-10 | Oceanic",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-cDWKRz-dJvOhuRz39lh4h52qGm9z7cCjBZ1IpCJp5QbRZtxXql9LnPrnr5wLXiY5EzX_2jjQJsHjZHPDEEg"
    },
    {
      "name": "Glock-18 | Off World",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-aAGOZxuFJvOhuRz39xRly4WSDm4z9dHvCOg8iC5pxQrZethbsk4C1MbnnsQTag4pFyy_9hzQJsHjSW_TM0g"
    },
    {
      "name": "Tec-9 | Cracked Opal",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SI-KSDWyVxdF5oOBlcCW6khUz_WvSwo2geHiUbFAkD8EkTOFetxi4w9ThZLnm5lfdj4JDznmqjixA6Sd1o7FVGUODCFM"
    },
    {
      "name": "G3SG1 | Hunter",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-QC3OdxNFkteV8Vxa_nBovp3Pdw9arJCrCP1N1DZFyR7EDskO4wd3mYr_ltVHa2oNNziWshn5Nunlp_a9cBi4_3bmx"
    },
    {
      "name": "Sawed-Off | Morris",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2veZt-IeeWCiqfx-hJtu1mWCyhqhEutDWR1NypJSnDPQF2C8N2EOEL4xjqkd20Ze7q4APW3dkWxSit2i4a7Ctp4LkcEf1yx89MV8Y"
    },
    {
      "name": "AUG | Triqua",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV6t_If6UC1iE0-d3vuZlSha_nBovp3OGyd-hdXzDZwApApYjF7UJtUK5l9LnYe_g4wDWjd5NmHqojnxJuCw-_a9cBrjnwKiq"
    },
    {
      "name": "SCAR-20 | Jungle Slipstream",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk5-uRe6dsMqLDMW2Fz-l6td56QyCjhgk1tjyIpYPwJiPTcFIgX5tyFOEJtxm_wdDkZOrq5gHcjIIRzyX_hiJP7io55O9WUKUgr_fJz1aWgsoiFrs"
    },
    {
      "name": "MP9 | Goo",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6NiL8-fB2CY1aAv5LYwSn23xE4l5GrXn9aqIH-SZlMiD8MjEbYK4UW_x9TmM-Lh4FHYlcsbmqGCM0DC"
    },
    {
      "name": "P2000 | Woodsman",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMW-Fz_pzot5lRi67gVMi5GuBzo6sJXiSOAJxCMR2RuECthTskNG1Yrm3sgCM345CyCj32yJP8G81tLtUlzXH"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "snakebite_case": [
    {
      "name": "M4A4 | In Living Color",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSLP-FC1icyOl-pK84GH2wxhty4DjcyNuhdHyXbAVxW8QjTbEMthC8kNa0MLmzs1Hbj95E02yg2bbWGcKW"
    },
    {
      "name": "USP-S | The Traitor",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSJ-OsG3SA0tF-se9uSi2-lBMYvzSCkpu3eX7EP1MpApdwR-8NsxbukoXuNLnj4QOMiN8XzHn_iC8a7Spi4upRWb1lpPOCQNKXgA"
    },
    {
      "name": "MP9 | Food Chain",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6JiL_SsDW-RyOBJvOhuRz39xB5-sGrTnt2tdymVOFApD8dxQLUCuxWxldLkNezjtVDd2t8Uyy_7izQJsHisCKzN8w"
    },
    {
      "name": "XM1014 | XOXO",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMXeFz-VJvOhuRz39xE8j5GXQztepd3OUOwJ2C5JwELYKsULslobuY-7htlDditkUnyn73zQJsHgY6bTDGg"
    },
    {
      "name": "Galil AR | Chromatic Aberration",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWSY0-F7sd55Rie4qhEutDWR1NivcH2VOAchC8B4ReZesxa5l4LlPu6z7wTa2IhHmCj4jyNJ7Sls4LscEf1yskqHCW4"
    },
    {
      "name": "AK-47 | Slate",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSMOKcCGKD0ud5vuBlcCW6khUz_W3Sytb4cCqTOFUpWJtzTOUD5hPsw9a0Yrnrs1SK3ooXzy6shilM5311o7FVYrIufmI"
    },
    {
      "name": "Desert Eagle | Trigger Discipline",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-HHG6Xxutkj-VgXCq6hREuvTi6lob-KT-Ja1UlWMAkTOMCt0G9kIHlP77l5FbW344XxX_4iSJJv31r4bxRUKUn_rqX0V-d-rquYA"
    },
    {
      "name": "MAC-10 | Button Masher",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-DAXWEwOx6td5lRi67gVN04GjXnIr7JyiSbQJ2W8Z4QuEItBS_kdyxZurnsVfcjYgTzH6r2ClN8G81tG_8yXMP"
    },
    {
      "name": "P250 | Cyber Shell",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSI-mRC3WDyet6vN5lRi67gVMl6mzUm9n8IHzCaQUmA5Z3RLJb4xC9m4bhMbzn7lOL2Y5Am3j73HxI8G81tOdaiAQT"
    },
    {
      "name": "Negev | dev_texture",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-XC3GExPZipfNscCW6khUz_W_QzdmhJy7EOFAkWMdzF-dbtEK9moGyZbi37gTZi4xMxH36iipK73p1o7FVNCisfvA"
    },
    {
      "name": "Glock-18 | Clear Polymer",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK8-DAWuJzOtkj-1gSCGn200h4TnQwtqoci_CPQYlDsAiRuZc5hK7kd2zZbm37lGK2o5HnH2v2ixXrnE85Jt4rDY"
    },
    {
      "name": "SG 553 | Heavy Metal",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-XC2aEyeNzpOBlcCW6khUz_W6Gw9aqcH3EOAUlCcR5Qu4J50O5ltbhMrnltgbdg4tDmSus3ClOuCp1o7FV59kcj5o"
    },
    {
      "name": "M249 | O.S.I.P.R.",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiVI0P_8PP1SI_-eDG6exNF6ueZhW2fhwB53smmAzIr_cy2fa1N0D5J0E-Je4BG_lt22N-63sQLYid0UxCytkGoXuS8jTKqZ"
    },
    {
      "name": "UMP-45 | Oscillator",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a4s27ZbQ5dc-WAmKT1fx5p-B_Sha_nBovp3PTztuvd3jDOlMhX5IjR7YPtRTtx4XjNum2tQOLjItHmyj5j34b6Spt_a9cBq1OnGjK"
    },
    {
      "name": "CZ75-Auto | Circa",
      "rarity": "milspec"
    },
    {
      "name": "Nova | Windblown",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwjFL0PyhfqVSN_mdCliUyP1mtfN6TiWMmRQguynLnN_4JXyWbwN1CZN2QbEMthm6k9bjMemw7lTc2N4QySr7h38f7Hxp5fFCD_RpV_ibxw"
    },
    {
      "name": "P2000 | Dispatch",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0POjV6p4LfKWHHSv0-tyj-NlWiyMmRQguynLm4mscyqXOAJ1DpAjQuML5BDpxN22NuPgsVeN3YpCn3mr3ypB7S455_FCD_SVmRFKPQ"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "prisma_2_case": [
    {
      "name": "M4A1-S | Player Two",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-J6SCbhxUl_jDGMnYftby7BbVdyCsB0EeZY4RPukNfhZOO2sQ3W398Qy3_6jHxIunptsO9TUqs7uvqAAWrfZoM"
    },
    {
      "name": "Glock-18 | Bullet Queen",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK6HLMXCR0-N3ueVsQRa_nBovp3PQydf4dXuSalUgCJZwRrILthi9kYDlMe_m4g2Ij90Um3moiXkc6SZj_a9cBgLxwlYC"
    },
    {
      "name": "AK-47 | Phantom Disruptor",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlJfA6H-CbD2mEzuNJtOh6XTyjgRI1jDGMnYftb3qTbQMpCZVxF-8Ku0Xtw4XkYu2xtQSL3d5FxSz-3H5Ovy895epRA6E7uvqAsbzZtpo"
    },
    {
      "name": "MAC-10 | Disco Tech",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-dD2SCxNF6ueZhW2frkR5z4m_SyY37cnKRblIpW5smQOcO4EW7lYa1ZOjgtFCLg4wXnn72kGoXuTa4h8QB"
    },
    {
      "name": "MAG-7 | Justice",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSKuWAGm6TxNF6ueZhW2fikUt36znWyNz_dn2ROgMhD5EiR7EO5BKxl4DlMLyx7gyNi4hAniz5kGoXuQ9OXJLa"
    },
    {
      "name": "SSG 08 | Fever Dream",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-VC3GV09FyouRoQha_nBovp3PTmYmqJHmeb1N1CpJyFOZftkO8x9ezNOOztg2MjYwRyyWsjn4d7n1q_a9cBq7gpQcW"
    },
    {
      "name": "SG 553 | Darkwing",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-XD3Wb1ud4t95lRi67gVN24D7WmN2sdSqSalAmDpR2F-IDtxTpkYKyZrmzsQffgtgXzSmqjSNA8G81tFvCRYkS"
    },
    {
      "name": "Sawed-Off | Apocalypto",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F3oO5qTiWqhQkojDGMnYftb3vFbVcmDsRwEOdbtkW4lIbiMOrh4FaIiYMQxXmoiXkd7n1o5b4AWKM7uvqARUQpSmk"
    },
    {
      "name": "P2000 | Acid Etched",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PO_V7Q_cKDDMWaTyOpJs-1mWSyhqhEutDWR1NmhJH6VZ1BzCZtzTeQKuxe_x4fuYenj4Q3bgtkXyHn-iC5MvC864OccEf1ypheGRTI"
    },
    {
      "name": "SCAR-20 | Enforcer",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMWKex-Fks-R7cCW6khUz_TmEn4qudiqVPVB0X5t3QbEN4ELqxNHlY-O27gCLg9oXmyqsjCtN73x1o7FVEvhkFhM"
    },
    {
      "name": "AWP | Capillary",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7JoKf6sAm6Xyfo44bE5HSrmlx5z4GTUzt__I3yebQAgA8R3FuFfsBTqx9W2Y7vq5lbfjZUFk3ugIlCuqg"
    },
    {
      "name": "Desert Eagle | Blue Ply",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ_yWMXWV0eJ_s-BWQyC0nQlpsjzdwtqgIHqfZgAgDZBwROBbtRDsm4HiM7zislfYitpBniz6iy5K7DErvbjLUTqBnA"
    },
    {
      "name": "Negev | Prototype",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-DHGiEzvpvoORWQyC0nQlp6juDydugcHvEawVxApB3F7JftxTsloDgZOqx51PY345AxXr33SNPuzErvbi5RDlayg"
    },
    {
      "name": "R8 Revolver | Bone Forged",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-fC3GZwPp-se9WQyC0nQlp5jmEydqpci2SaQdyDZEjEeFe4Re4wdznNu6ztgbWidkQzSz6jiJKuDErvbgK8jU85g"
    },
    {
      "name": "MP5-SD | Desert Strike",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1Y-s2jePFSJPWAC3WE_v1iouhiSha_nBovp3PUzYyqdHKfOgJ1CpAhROQJukW4lYDuMr7jswfWjdpNyimsi35O53s-_a9cBg0oJUav"
    },
    {
      "name": "CZ75-Auto | Distressed",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H_OWHGabzvpzj-1gSCGn208hsTyHw9z6eS2faQEoX5p1ELECtBi7xtG2Pr7j5APZjopDynj_iHtXrnE8XiCan1o"
    },
    {
      "name": "AUG | Tom Cat",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7BlNf6XC3WD1eFkvd5lRi67gVMm5GrRzt2sJXqUag4kDZAmFuBYtUTslIXuPui2s1Hb2o4Wyir2hy1N8G81tF6C_jtH"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "prisma_case": [
    {
      "name": "M4A4 | The Emperor",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSJf2DC3Wf09F6ueZhW2exwBh_6m3dnt36InjDPQ4oXJt1TbJeshW_mtfjN-vrsgaKiokWy333kGoXuRj4z9Nd"
    },
    {
      "name": "Five-SeveN | Angry Mob",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC1iDxPhzvt5oQS6hjCIrujqNjsH_cy2RagUjA8BwR-de5hjskNflNrnqsgaLiYgRyyythitM7Hw-sekKT-N7rXEld5dH"
    },
    {
      "name": "AUG | Momentum",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV6liLfWdGnKd_uJ_t-l9ASi2zUp042SBno6sICrFbFMnCZR5EedftkPqk9ayMr_j71fXjo8XmXrgznQeFjVtTWM"
    },
    {
      "name": "XM1014 | Incinegator",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMW6ewud4tfNoWyahqhEutDWR1NuuJXqWO1d0CsdyE-9ctxPpkYDmYr6zsgKLgt5NnC33in9B7idi4u8cEf1ypt9Mlvk"
    },
    {
      "name": "R8 Revolver | Skull Crusher",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2tfZt_JeacAnGV09F5oPF7Sjqgmg8YvjiBk5r0b3uSaQUiCsZ2E-EI5EKwldW2NOzqslffgopHxHj-jHxLvH4_tbwHWaQ7uvqApie1xz8"
    },
    {
      "name": "AWP | Atheris",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7JkMPWBMWuZxuZi_rZsS3zgzU8isW3dnIr6eHKfPVAhDpojEe9YsUW4xta1Nuzm5FDci4NbjXKpmWVQppo"
    },
    {
      "name": "Desert Eagle | Light Rail",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6OGRbKFsJ_yWMWKIztF6ueZhW2fhlhlw6m-GnNyvIiiXOwQoDMR2QbZe5hi5k9KxN-vhtFbciN1FnyqskGoXuU4JtHUo"
    },
    {
      "name": "Tec-9 | Bamboozle",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SIvGeDGif_uJ_t-l9ASi2xxhzsT6Emdr6JCqTPQJyXpR4RLMI5hm_wNHjZe3r5Qzci41Dy3jgznQeOWU5G3g"
    },
    {
      "name": "MP5-SD | Gauss",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePF-JM-SHXOCzuN3pOhqcCW6khUz_WzTzYmhJXuSaANzW8EkQ7JZ4BjsxtSzYezr5lbfidlEzC-vjnxK7ih1o7FVYPX5q0o"
    },
    {
      "name": "UMP-45 | Moonrise",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a7s27ZbQ5dc-eAWie0-dltd56WiegkAkYvzSCkpu3IHzGbQFxCMByE7MJsxC6w9ayN-3ntgPf3YtGmX6tiyxM6X1pt-cCUr1lpPMz7bPahA"
    },
    {
      "name": "AK-47 | Uncharted",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeqHC2SvzedxuPUnFnCwwBl_5D_Syon8dnyUaQUlD5oiQ7ECuxW7l920ZL-w4AfX2IlByTK-0H0PRM7cOA"
    },
    {
      "name": "FAMAS | Crypsis",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1I_82oaalsM8-UBmiD1dF_vvJsTD2gqhEutDWR1IyudXKSOFIkC8QhTbEK5kK8x9C2NOK3slbYg48Rnyr_hixI6i85sr0cEf1yzP52oWI"
    },
    {
      "name": "P250 | Verdigris",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNK0OL8PfRSNvWBCm6X0-dlj-1gSCGn20R35DnRn42udXiVOg91CpZ4ReACthC4wYexZuuw5VeIjdkUzyqq3CNXrnE8Cr6wnKw"
    },
    {
      "name": "Galil AR | Akoben",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0OG-V6NsLPmfMWabzuxzvt5lRi67gVMlt2_dzd6qcH2TOgN0CpIlE7Ve5hbukdW0MrixslPW2IgQzyv8jypI8G81tJzCUipD"
    },
    {
      "name": "MAC-10 | Whitefish",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-VB3SY_ux3ufVWQyC0nQlp52jdwt-vdnyeP1QoDZQlTeQNtRO-w4e1ZeKzswCM2INHynn3hixPujErvbg9KuBZSA"
    },
    {
      "name": "MP7 | Mischief",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V7ZsI_uWGmKV09F6ueZhW2fnlE5x52Tdz4mscn6XOAFzXppyQ7RZtkTpwNzuMejn5wyPjYoTy336kGoXuS747mDn"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "operation_hydra_case": [
    {
      "name": "AWP | Oni Taiji",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6xsLv6KD1icyOl-pK9vGCqwkx524G_WnNmsInyXOAVyXJJ0TbNb5EOxxIflYbzj4gDdiNlC02yg2XaKgrAq"
    },
    {
      "name": "Five-SeveN | Hyper Beast",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-lwXyyhlxgmoCm6lob-KT-JO1QgWZVyELEPu0W4l9KzYbzn5Fbf3YkTzn_8hihIvXxtsOoFUKYirLqX0V_f6-eqCw"
    },
    {
      "name": "M4A4 | Hellfire",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSKPWfAmGZ0-tJvOhuRz39zEp24GTXmImsInqWP1AkXpBwE7FetUTswdfkPu7h5QXXithBy32t2DQJsHhDPmtuAA"
    },
    {
      "name": "Dual Berettas | Cobra Strike",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhIvWBC3OEwP1Js-5rXSiMmRQguynLydn9JXmUOwMgCsN1EbMPsRHtxoDuZrzm4VTait4Tzn_-jn4f7ipu4fFCD_Qo-zseRg"
    },
    {
      "name": "Galil AR | Sugar Rush",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWSRz-pvs-loQDqMmRQguynLyNqpJX_CPwUpXpEmEOMLs0K-kdPiN-uz4wfW2IgWyySr2ixKvCht4fFCD_QYspg1jQ"
    },
    {
      "name": "AK-47 | Orbit Mk01",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlV6diLP-dFzfB_vxztN5lRi67gVMk4TmEn9n_c3PGPwZyDMckTO8JsEPuktG1ZOrjsgPX2IwUyiyv3S0f8G81tLnuvOvF"
    },
    {
      "name": "SSG 08 | Death's Head",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-XC2aEyf1-teBtcCW6khUz_WTXyNipeX-QOlQhXpJwFuYO4xLqxobuN7vn4QaNgthBnHn7iSJPv351o7FVSPuLyfc"
    },
    {
      "name": "P2000 | Woodsman",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMW-Fz_pzot5lRi67gVMi5GuBzo6sJXiSOAJxCMR2RuECthTskNG1Yrm3sgCM345CyCj32yJP8G81tLtUlzXH"
    },
    {
      "name": "P90 | Death Grip",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk_6v-V6ZsMvWRAWmV0tF0vPRscCW6khUz_WqAy4z6cX2Tbg8hWJN2RLQMsRPplNDmYr63sVPciIkTyij3iX5M7yt1o7FVUmFnInA"
    },
    {
      "name": "P250 | Red Rock",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSIeiaAWqvzedxuPUnSizhkEh05zzQmIr8JX6UbAZ2DsMhTOEOthexl9e2NuLktAzaiIpGnjK-0H2BmRk7ww"
    },
    {
      "name": "USP-S | Blueprint",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA0tF0vPRsXzu6mwkYvzSCkpu3IiqTZgAmCJIlRLEP5BXpxtPlMOOxswPZithFyyj3iyNPvCo96r1QBb1lpPPa5SpubA"
    },
    {
      "name": "M4A1-S | Briefing",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-xsWzu6gRg1sgKJk4jxNWWTZgclDpNzQ7FZsESxxNPgZujksVDf2dkTmS343S1M731t5OcLAvZ05OSJ2NaAMPYY"
    },
    {
      "name": "Tec-9 | Cut Out",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNK0Oara_1SI_iSAmyv0e9ipOR7QRa_nBovp3OGnNb4dHiTaFdzX5EjRLVY5EG6mtOzYu7q4FDb2IxBynmvi34bvCo__a9cBktm4Qsf"
    },
    {
      "name": "UMP-45 | Metal Flowers",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a_s27ZbQ5dc-VAmadxOh6v_ZsXRa_nBovp3PTnN2vc3zGaFAgWMZ4F-MDsBW7kNXhP7i04gCI2oNDyij8iSpI7S84_a9cBuxmxCPI"
    },
    {
      "name": "MAC-10 | Aloha",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-SAmiYwNF6ueZhW2flxhsmtW3RnNiscnOWPA9xC5MiTeUKtRXqk9HgMOvh4wPd3tkQmXn6kGoXucQMChaB"
    },
    {
      "name": "FAMAS | Macabre",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1I_82oaalsM8-eD2SRw_xzj-1gSCGn2xkm5myEzo2sdXPBagInW5pxTLICshnswdOxNrzj71fc2d5CzC76iSJXrnE8xi9ndzw"
    },
    {
      "name": "MAG-7 | Hard Water",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiNW0P-vb_NSI_GGHXOZwtF6ueZhW2eykx534j_VydygIi6fPQJ0DJcmQrIMukK7k9HvZO224FbajI8WnC-tkGoXudK2z8cj"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "gamma_case": [
    {
      "name": "M4A1-S | Mecha Industries",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JveRqRyiMnBMjpi6RiIb8MhTLN1F4TowiE7EMtRW7ltzlMbvi5wPej4pDmCT2i3tKuHo4sOoEWKFz8qPS3F7BL_Rjtn0I4s52"
    },
    {
      "name": "Glock-18 | Wasteland Rebel",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-ED3SExOJ3vuVWXSyxkBEYvzSCkpu3Iy7GPFUnC5t3EO4I4Bm6w4DmNu3k4lCN3YNNniz23HsY6Xxv5rwCU71lpPMpvj9PCw"
    },
    {
      "name": "M4A4 | Desolate Space",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJPWAAWuR1etJo_FoTCyMmRQguynLnNepJXPEaQJyDZJ0QOdbsxi7ktS0Y-Li4ADegthGn32ojCJJ7CxosfFCD_SyjfEkHg"
    },
    {
      "name": "P2000 | Imperial Dragon",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PW9V7Q_cKDDMW6d0etkueBlcC2hlBoovQKJk4jxNWXEbAQmDsQmRbNYsxGwxoC1YrvrsQXXg40QxCX533tJ7Xs-4eYKWKAl5OSJ2JuLIVNl"
    },
    {
      "name": "SCAR-20 | Bloodsport",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMWWczuFyo_FmXT2MmRQguynLnoqrcHPCaFdzDMF5F-8P4Bbum9fkYuvrsVffjI5AyS75inlL5ixjsvFCD_R20nqesQ"
    },
    {
      "name": "AWP | Phobos",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V7RlL_KcHVicyOl-pK84GXHmwk115D6GzdqudHyUbwRxW5R3ROZbtEG8wYDiY7-x5VOKgotB02yg2bdJjfAf"
    },
    {
      "name": "AUG | Aristocrat",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV6V_KeOHAWSCwPpJvOhuRz39w00j5WSDytyqI3_CPwAgXMd2E-Vc4US-koCxNOzq5AaMithNyij32DQJsHjdc8VZyg"
    },
    {
      "name": "R8 Revolver | Reboot",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2tfZt_eM-QF2WV0_1mv_N9cCW6khUz_WjRyouseHqUPwQoXMNyQbMM4ETulNSxNuq3s1DZi95CzH_-2Cgf7Hp1o7FVySZFkkA"
    },
    {
      "name": "P90 | Chopper",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V6J4LPysGm-CzvpivORWQyC0nQlptWTXzt-tIyrFPQMjCpImQbED5xm5kIDhZePitlbdjotBnH783H9L7jErvbjpMmMyTQ"
    },
    {
      "name": "Sawed-Off | Limelight",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWClifx-hJvOhkSha_nBovp3ODz4utJHrBZ1MjD5YkFO8NtBjqwdXvP-nn4QLZjIJNnHio2Hwd5npq_a9cBh09Jdi8"
    },
    {
      "name": "Five-SeveN | Violent Daimyo",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC1iDxPhzvt5tTiC-jBIYvzSCkpu3cXjCPAB2WZMmQ-EK4BTqlNSzNOLk71GI3tpGmX2oii5N6nk667kDWL1lpPNv4wCTtw"
    },
    {
      "name": "Tec-9 | Ice Cap",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNW0Oara5s0H-OWD1iDwOJij-1gSCGn2xtz5TjdyNquJX-XaVV0CMd3EOUP5Bjsw93uP77jsVHejohEyH6t339XrnE8zMglqPs"
    },
    {
      "name": "SG 553 | Aerial",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-SC3WZwOJJvOhuRz39wkQj4TzXw9igJXrEbAJ1C5VyQeVZ5hHslIXjMOyz41begt9Myiiq3zQJsHi7xfgn5g"
    },
    {
      "name": "P250 | Iron Clad",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSLfWHD2uv0e94te16cCW6khUz_W2Hzd6heSjBbFd1CsFxF-8DsULulNLjZu6xtQDfitlCyiWt3HtNu3p1o7FVE3GEpAE"
    },
    {
      "name": "Nova | Exo",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiNK0PyhfqVSM_OaMWGZ_uJ_t-l9AS3lxE8k4zuGz42qciiVPQIkDcF0TLNeuhmwxtfhYbzm4wfci95FnC_gznQeGrfN1lI"
    },
    {
      "name": "PP-Bizon | Harvester",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1c_M2-eJtvKeqcAFiYwPxgtfJ9SjuMmRQguynLyd76dSqfZlUoA5dwFOBb5BGxxNDlP-Lg5QKM2IoUyyqv2ixL7ihr6vFCD_SgdFoAow"
    },
    {
      "name": "MAC-10 | Carnivore",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a_s2jaadScaCsD2uZxOBJs-BkQBa_nBovp3PSmdqpcy2fPwEoWMciQLYKtBa9lYDmN-zlsVDXiNpAnnmqiHwcv3w5_a9cBiTJtAYY"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "chroma_2_case": [
    {
      "name": "MAC-10 | Neon Rider",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-dC2ie0-dytfNWQyC0nQlp5DzTntmgdC7COABxX5NxQrUOtUS5w4LgMu6zsVCK2IJCmyisjitM6DErvbicsEA0SQ"
    },
    {
      "name": "M4A1-S | Hyper Beast",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9JuPh5SjuMlxgmoCm6lob-KT-JbwF1WZEjR-YJskK9k9XiYePltAeNjYlAxSn5j34dvCZstb4LB6Ut-7qX0V8Xkv5_2A"
    },
    {
      "name": "Galil AR | Eco",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWKTztF6ueZhW2exwExw4WrcyImrcHmTbQAlWcQkQudYt0O5lNfgP-nh5AOL3otAziz7kGoXua-HTb4P"
    },
    {
      "name": "Five-SeveN | Monkey Business",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-NoQSi9lCIrujqNjsGheXmXPQcoWMFzEO5ZtUOwkILjY7yzsg3ci91DySiohn4buCht4eYET-N7rZVO80Su"
    },
    {
      "name": "FAMAS | Djinn",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a_s2oaalsM8-ZB2me_uJ_t-l9AXzhwxt-5TiAzdmgd3yeaQ50DZRxEe5b4BXrm4HkPr7kslfcg9pCznjgznQepOOy8CM"
    },
    {
      "name": "AWP | Worm God",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DNk7uW-V7B6Kf6WMWuZxuZi_uRoGH3iw0wh4j7cnt6ucSqSZwUkCMB5TLIPsES_kNbuYeOwtgXai4NbjXKpZ4kj0o0"
    },
    {
      "name": "MAG-7 | Heat",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSMvWXBmiE_uJ_t-l9AX7nzBsk623dm46odHmUbFd1Dcd2RbINtBXtkNDjMbzj5AGKjt4UyijgznQe8JftFTE"
    },
    {
      "name": "CZ75-Auto | Pole Position",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H-CBC2SZ0ud5vt5lRi67gVNy4mTdzdmgc33COg90DcB2FuMPtxLpldSxZeLn4w2K34NCzXj9hnsY8G81tCL36RK-"
    },
    {
      "name": "UMP-45 | Grand Prix",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1a4s27ZbRSMvGQC3WvzOtyufRkASjjxU1x42nVyo2rdnKQbA9xX5ohRrYMtBntmtW1N7zj5lDZgthFzC3gznQezoUeLLY"
    },
    {
      "name": "Desert Eagle | Bronze Deco",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7v-RarZiLuqWMXSAwPx9vORWQyC0nQlp4zzdydqtJXuTOgZzW5F4QbNZ4UK7l9e1N-Pq5AeNj9hHmH783S9J6zErvbgcMfnnyA"
    },
    {
      "name": "P250 | Valence",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNK0OL8PfRSI_-dGmiF09F6ueZhW2fiwUx14zmDnNagcC-WagUkApslQuBYsUW_ktexPry3swPfiogTyyiqkGoXuQius2mt"
    },
    {
      "name": "MP7 | Armor Core",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_DNk4uL5V7FhNOKSA2iUxPx4j-1gSCGn2xhw6zjSzYysICiUOgV0Cpd1TORe5BW9w922Nrux5gKLitpGz3irhnlXrnE866qixJk"
    },
    {
      "name": "AK-47 | Elite Build",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSLfGAGmKC2NF6ueZhW2e2wh9y5GjTztirdSqfP1dyCpclR7FZ5xe9wNbhZei25FGPjokXxC2vkGoXuQLr5jvs"
    },
    {
      "name": "Sawed-Off | Origami",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F5ouhuTiS6qhEutDWR1IutIyqSalBzWZQjQbUD4UaxltCzNuLgslTejYwTxSn2jCIc5n1jtbscEf1yxjZ09aw"
    },
    {
      "name": "Negev | Man-o'-war",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1a4s2gbaNoNs-UAmiC2NF6ueZhW2fikBh352vQyt-sI3mRbQ8lDJpxTLVfuxC5k4W0MLvm5VfeithHnij5kGoXuSdORNFb"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "operation_phoenix_weapon_case": [
    {
      "name": "AWP | Asiimov",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6V-Kf2cGFidxOp_pewnF3nhxEt0sGnSzN76dH3GOg9xC8FyEORftRe-x9PuYurq71bW3d8UnjK-0H0YSTpMGQ"
    },
    {
      "name": "AUG | Chameleon",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV6dlIf2WAmKfz-9_ouRWQyC0nQlpt23VztercCjGbg90C8RyQOcMs0G5x93uZLm37wbe2owTz3j9iShI6TErvbi7ZmzWCw"
    },
    {
      "name": "Nova | Antique",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSIf6HB3aFxNF6ueZhW2fmwRwl6jyHw96vIn2UbVVzXMdyRuYLt0O7ltPjZbu0tQTejo9Hyn2skGoXucYtjcOH"
    },
    {
      "name": "MAC-10 | Heat",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-BC2OYzvpJvOhuRz39xR5w4GzUyo6pdnuUawMpWJokTLUL50K6l9XiNO7i4lGKiYsRxCv6jTQJsHim4lDW8g"
    },
    {
      "name": "P90 | Trigon",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V7B_KfecAFicyOl-pK9vGi3nlEt24GnSwoypc3rFbQ52XsN0EOFcshfuwYa1NbzktVTZ3ohN02yg2RSFidN_"
    },
    {
      "name": "AK-47 | Redline",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-RHGavzedxuPUnFniykEtzsWWBzoyuIiifaAchDZUjTOZe4RC_w4buM-6z7wzbgokUyzK-0H08hRGDMA"
    },
    {
      "name": "FAMAS | Sergeant",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a4c2oaalsM8-ACXOvzedxuPUnF3HmkBx_tjnSmNmrJHiROFN1W8NxFrFZsxbrk4e0Yuvr5wWLi4JAyjK-0H3maOk52Q"
    },
    {
      "name": "SG 553 | Pulse",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-DG2uDxNF6ueZhW2eykUh24jjczYqscH7GblIpCJBxF-AD4BHtxIKzM-nq5ACK3t1GyySskGoXuRyAaawM"
    },
    {
      "name": "Tec-9 | Titanium Bit",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNW0PSifbBoJM-HC2TJ_uJ_t-l9ASi3w0gm62qHzdz6Jy2WbAZxW8dyTOEIukawldfhY7zqtgKN2d9MyHngznQe9VU90c8"
    },
    {
      "name": "UMP-45 | Corporal",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSI_-BHmiCwOJJvOhuRz39wUUi4W6Bzdipd3KWOwInXJFyTbEKuhbtloHlMbzm5AbW2YkWzSv5jjQJsHiIsauxOw"
    },
    {
      "name": "Negev | Terrain",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1I_82gbaNoNs-HG3WB_vpzovNoRieMmRQguynLz4qgJyqWOg8iDZFyFOcD40axlYflNL7htgDb2thNmH6oinkc5yZt4fFCD_QbgNa1nA"
    },
    {
      "name": "MAG-7 | Heaven Guard",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSKPWSGGKe_uJ_t-l9AXm1zEol52_cz9z9d3rDb1J0DZdwFOMLtxa4m4W2Zejn5ALc2NhFzyTgznQeMWQmjgI"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "gamma_2_case": [
    {
      "name": "AK-47 | Neon Revolution",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6SHGSY2NF6ueZhW2e3w0524mjQzomreXqVbAAhWJF3RuZfuxC5x920Yurh7gONjY0RxHr4kGoXuT5bpI-V"
    },
    {
      "name": "FAMAS | Roll Cage",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-BD2uc2NF6ueZhW2exzUhz4WjWmNqpdy-UbwJxDJtxReEMtRGwloflP7m04wfXi94QyXj9kGoXuV3JhaXD"
    },
    {
      "name": "AUG | Syd Mead",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7d0JM-eC2aU_uJ_t-l9AX_rkU9-5j_Ry42qcnuQbw5zCcMhQrINtRO-xIHvY-Ow4gPY2Y4UmSngznQeqqNNbYw"
    },
    {
      "name": "MP9 | Airlock",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6psMvOaHVicyOl-pK8xGXq2xE536m7dnI2vdS6WagZ2CMFyFrNcsBjuw4G1Ne23tQGN3olH02yg2ZxyeudA"
    },
    {
      "name": "Tec-9 | Fuel Injector",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SM-WDC3WTye9kt-RtcCW6khUz_Wvcy9qgdCnEPQ8hApBzRrQJ4RW7moDgMLzktFDZiI5HnyWr3ChN5yp1o7FVg4hNKG8"
    },
    {
      "name": "SCAR-20 | Powercore",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMXef1utks-57Sha_nBovp3OAzd2qIy_DPVMkXMEiE7UL5ES-l9yyP76wswWP3Y1Nyyn2i35L6S5s_a9cBj_cXeyl"
    },
    {
      "name": "SG 553 | Triarch",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4ds-HHG6R0-1-j-1gSCGn20Qk6m3UmY77IHOeOlNxCJQmQbYMuhC6mtaxP-K0sQLYi94RzC_8iH5XrnE8WPSRipg"
    },
    {
      "name": "Desert Eagle | Directive",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKF-JeKHMWKRxuJzj-JmQTqnlB8rtgKJk4jxNWXGPQ9yA8Z0R7FbtBi7w9S2M7_msgCIid1CmH6viH5I7ilr4-oEUKst5OSJ2LTZlHwR"
    },
    {
      "name": "Glock-18 | Weasel",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK6HLMXCVwP1zvN5lRi67gVN_4j7Qzdj8dimQblQkX8YkTeNe5Bmxkd2zNr_j5QbdjthCzX-qjylI8G81tDMJpR5Y"
    },
    {
      "name": "G3SG1 | Ventilator",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-FC2mEyOJ3pO57cCW6khUz_W_Rwo36cC6SagZzDZZyQbMN5kTtwNC0Mb60sg3cjo8UnHn4j3hPuid1o7FVSaKTKS0"
    },
    {
      "name": "UMP-45 | Briefing",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-eC3OCyPpzouBWQyC0nQlp627XyNigJHjBOwIiXMNyQuUKsRKwktK2Zu_j5FOKi9lCzHmtjCNKvDErvbgMSlL6rA"
    },
    {
      "name": "Five-SeveN | Scumbria",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRabVSJvmFC1iDxPhzvt56TDy-lw8usgKJk4jxNWXBP1JzAppxQ-UN5hm_mtLgZbjn5wPdi49Bnyqr3SJPvChq4-tWB6Ak5OSJ2BFWlPNZ"
    },
    {
      "name": "CZ75-Auto | Imprint",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4H-SBC2aU_uJ_t-l9AX_ql0kksWTVyYupJC7FOAUiAptxQudbs0KxkNK1MLzl4wOPjIsWyCngznQeZTDWXeo"
    },
    {
      "name": "P90 | Grim",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V6N_Kf2eMWuZxuZi_rA9GHDrlh8h6m7dw4qpciiUOgQkAsF2ELYPsBjploe2P7ngsQaIjN5bjXKpNUOMolU"
    },
    {
      "name": "XM1014 | Slipstream",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk5-uRcKk8cKHHMWGCwO1ise1WTSWmkCIrujqNjsGrdn-WZw51ApR5FO4K5xDuk9O0Zunm5lGIio4Rnn2rjyhA7Cw_se1WT-N7rYJQ1fMT"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "spectrum_case": [
    {
      "name": "AK-47 | Bloodsport",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSIvycAWOD0eFkpN5lRi67gVN15mmDw9egci_EPFAkDMQlTeZe4EXplNa0Yrvr5wbd345GyHioiC4b8G81tFuqg_k_"
    },
    {
      "name": "USP-S | Neo-Noir",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA0tF4v-h7cCW6khUz_WXdmd-vI3uRPwEkApR4QuBcu0Xrk4biYr_mtQXdidlCz3r63Ska7Hx1o7FVWuokIcU"
    },
    {
      "name": "M4A1-S | Decimator",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JtORqRiSygRI1jDGMnYftb3iUb1dxW5ImFLNftxCxktflZLm2tgaP2otGyn_-hytOvy9q5elQV_A7uvqA6CRSoZY"
    },
    {
      "name": "AWP | Fever Dream",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7R-OfObAXeR1eZJvOhuRz39kE1w4jiAzNiod3qTOgcgXpAlQ-ML5hjqxtHjZOrrtlHWit9EyCj9iDQJsHhCZP-wUg"
    },
    {
      "name": "CZ75-Auto | Xiangliu",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcpt-LvGYC3Sv0ftkoO1scCW6khUz_WTcw9r7JH7BOgApApojQuBb5kO5lNO1ZO_h4VaM2o5Gm36s3HgbvH51o7FVgkdxNDg"
    },
    {
      "name": "UMP-45 | Scaffold",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1c_M27ZbRSIfKKHXSvzedxuPUnGi2ywBwhsmuDnNn9cX_EbA4mCcF1QbJZ5BPtm9fjZejnslDciNgUzTK-0H2MLp31Hw"
    },
    {
      "name": "MAC-10 | Last Dive",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a7s2jaac8cM-HBmKvze9lpN5tRj-2qhEutDWR1N76Iy_BblUnCZd5QLFesEXrmtWzMui05wPc3o4TnnqojS8au3094ekcEf1ydsF2boo"
    },
    {
      "name": "Galil AR | Crimson Tsunami",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0OG-V6NsLPmfMXCR1-tJvOhuRz39x0Qm6mjQzo6qeHLGOg8nXJUiE-UKtxa5mtPgZu3rtFGMiIwXxH-viDQJsHh48m4KFg"
    },
    {
      "name": "M249 | Emerald Poison Dart",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wjFL0P_8PP1SJuKcCVif0-dxue9oQxa_nBovp3PRzNb8JX2VO1IpDsclRrEPtxXtxNSxYuuw4QHai9gWyCT2j3gYuHlt_a9cBlcR8wa2"
    },
    {
      "name": "P250 | Ripple",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNW0OL8PfRSM-CGGmmZytF6ueZhW2fnlht-5juGyY2vIC2SalQjX8Z1RbVesUG4m9XlN-_ntQPa3YNBn332kGoXubXJFvZo"
    },
    {
      "name": "SCAR-20 | Blueprint",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRaqh4JeCBB2mE_v11sfNWQyC0nQlp4jvQn92oJX-VaVIgW5QkQuYM5kLswNTnNL-w4QaK2YNFmXqqjSxJuzErvbi8Z0332w"
    },
    {
      "name": "Sawed-Off | Zander",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2veZt-IeeWCmiWx9Fsse9tSjvhqhEutDWR1N79dXrBbFUgXpt4QrJb5hfuktTgYuLrtAXXiNpGySuvjS8b6i9j4escEf1ycSPZoqI"
    },
    {
      "name": "MP7 | Akoben",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf7jJk4uL5V7B_KfKSAliJxOJ6v_ZWQyC0nQlpsWmHyIquci7EPQQgCZMkE7FZsUXpx9y2Mu6wsgbWjINFyir9iXlNujErvbjY0_iNfw"
    },
    {
      "name": "Desert Eagle | Oxide Blaze",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKF-JeKHMWKRxuJzj-JmXTu8kRgpjDGMnYftb32UPwJxDJokRuUIsRi_lNPhM7izsgXZi49GySiq2nxNuCdttbtUB_A7uvqAjSk2l_c"
    },
    {
      "name": "PP-Bizon | Jungle Slipstream",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1T9s2sYb5iLs-HAXWe_ulkteRncCW6khUz_WjQn9msInvFOlIjCZJyFuMKsEG-l4blY-zh5lDWi4lFnCr53S1Juip1o7FVTY_WZWI"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "chroma_3_case": [
    {
      "name": "M4A1-S | Chantico's Fire",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_JmWiWnlBYioQKJk4jxNWXFZ1IgC5MiQuZeuhK4wIXnMuPhslCM2oMTxH75hnxK6Htjse4BVqd25OSJ2DU2Q_CD"
    },
    {
      "name": "PP-Bizon | Judgement of Anubis",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-QG3WDxNF6ueZhW2fkzU0isDvTnomsdS7BbwF0A8ElROJfshC8wN3jYu-2tQ3c2osTxCitkGoXuVioOA3_"
    },
    {
      "name": "P250 | Asiimov",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSIeOaB2qf19F6ueZhW2fixx53tWqEm4ugeXuebQN0CZJyRrMJuxm4loCyPr_i51TfjtgXzi79kGoXuUXmUJzm"
    },
    {
      "name": "AUG | Fleet Flock",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV7d6IfyfAXCD_uJ_t-l9AXnmw0t252TVztercCmTZ1AmDMZ2RuBftRnsx4LhN-O0s1DYi9pEmCTgznQesuSvNik"
    },
    {
      "name": "UMP-45 | Primal Saber",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-DHG6dwOJlseNsXRa_nBovp3PRn478JHmePQ8hDcF2Q7YDtxXrk92zYbyw7gXYjIhEyCn_3Hsbui44_a9cBklqRdMs"
    },
    {
      "name": "SSG 08 | Ghost Crusader",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1c_M29e6M9eM-SHGqRwuFktd5lRi67gVN_6jnQzYmhc3jFbgUoA5J3ReYIsRO8ktGyM-iz4AaMi4hDzyqsiSJJ8G81tKe_wmAg"
    },
    {
      "name": "Galil AR | Firefight",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfD3WvyOB1te9sXSinmg8YvzSCkpu3eH_EZ1IgDsR1ReYPshm6x9XnZe204VCMiIsXzS_33S0b7X5t4-dQUb1lpPOTHSUAOw"
    },
    {
      "name": "Tec-9 | Re-Entry",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNW0Oara_1SMvWXDGuR0vpJvOhuRz39lkp-4j_QnoytcS-RPwEgDZt1FuAJshG6ktW1NLy34gCPj44WmH7-jzQJsHhOKqOsYw"
    },
    {
      "name": "CZ75-Auto | Red Astor",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4Ic-BC2OR0vp5ot5lRi67gVMh5D_cwor7cy7GZ1UpA8F0QrQP5BjuwdHiZr7r5FeNjIpAmyT8hnlI8G81tORsc2LX"
    },
    {
      "name": "SG 553 | Atlas",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-SGmuR0tF6ueZhW2fgkxt_tTndn46rJX6QOAEoC5QhEe5f5hHqltfgMeO0tQHY2IsTyyyokGoXuYh0VG-5"
    },
    {
      "name": "M249 | Spectre",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SM-CWDXOCxNF6ueZhW2fqwklx4j_Wyd_6J3yeOlcoXMclQuQI4xbrw4fmNrziswLX2IhHziqrkGoXuVEVHa_j"
    },
    {
      "name": "Dual Berettas | Ventilators",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhIvWBC3OEwP1JpuRnWyC_lAkooS66lob-KT-JblNxDcMiQe8M5hDtxtfnNrvrswyLjdgWzCyvhytP7ilqt7pXBfdz-rqX0V-MxKZG7g"
    },
    {
      "name": "P2000 | Oceanic",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0Pq3V7Q_cKDDMWiTxO94ud5lRi67gVNysmuGzt_9JSiQaQJ0C8MkTLJbskHrk4fnZe3isgfZg4tMnySoiX8Y8G81tHDFigbI"
    },
    {
      "name": "G3SG1 | Orange Crash",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1I_82pO7dqcc-eB2uZ1ed3v_NoQS62qhEutDWR1Iv_IC2eZgUkA5Z0RbEL5BLqw9flMby2swba34JBnHr22CMd5i1r67ocEf1y0mrzb0E"
    },
    {
      "name": "MP9 | Bioleak",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_C9k4uL3V6ZkL_yWD2yvzedxuPUnHSi3xhgm4GSGm4mpcnyTbVQjWcZ5EeIL50LultzgNbvmtAPf3oJByDK-0H0NB5p7wQ"
    },
    {
      "name": "Sawed-Off | Fubar",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2pe5t-IeeWCmiWx9FwpeNoXRa-kBkupjDLmN39d3jDb1VzApsjFu4DuxC5ltKyMbi2sVbZ2tpNyiuvjH8Y7HpqsPFCD_SxQd5sJw"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "chroma_case": [
    {
      "name": "Galil AR | Chatterbox",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfMWaS0-9lue5ncCS2kRQyvnPXnIn7eSrEZ1AnD5NxTeII4ESwxN3jN7zl5QHXjdhAnyuo2y9Nv3xs_a9cBuAhdjfO"
    },
    {
      "name": "AWP | Man-o'-war",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7uW-V6NhL-KKMWuZxuZi_uM5HXG3xhh_t2iBnI2ucn3EZwEjDpJ0Q-dY5EPrxNTiYevj7gXa2IhbjXKpQIFOiXU"
    },
    {
      "name": "AK-47 | Cartel",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNK0POlPPNSI_GBGmKc_uJ_t-l9ASuywktwtW3dwt79eX6fZlUiCJJ1RbUPtkW8w4LiZe_i4ATYjN8WmH7gznQeZkk4ehM"
    },
    {
      "name": "M4A4 | 龍王 (Dragon King)",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSIf6QC3SE0-96j-1gSCGn20x062mAwtb8cX3CaAMoApV3EeFZ50Wwk9fuM-vqtAHW3opHn3iqiSxXrnE8PytIGFg"
    },
    {
      "name": "P250 | Muertos",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSLfGdCmacwNF6ueZhW2e1lh51sm3UmN37cHuUbQQhXJtwQO4C4BXsxtHjM-624A3a2IoWySiskGoXuSIJMqiP"
    },
    {
      "name": "Desert Eagle | Naga",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKFsJ_yWMWmRxu9JvOhuRz39zEx06jjWm4n8Ii6WPFQhA5YjE7MJskPrwdTuZb7htlHbg9oTzCn2hjQJsHhQd9ynBw"
    },
    {
      "name": "Dual Berettas | Urban Shock",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2rZK15JeOsG3WSwOBlpO57Qha_nBovp3PQzI6pc3iRZ1cjC5dzQe4CsxPtwdHjMevq41CLjIpMm3_5jypN7Cxp_a9cBoxgoAoS"
    },
    {
      "name": "MAC-10 | Malachite",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-eD2uRwuZ_pORWQyC0nQlpt27Uw4yrJy_FOlQpCJp2Te5Y5hPqw9HuYePksVaKjt0TmS_2hihJuDErvbgNFzWT1Q"
    },
    {
      "name": "Sawed-Off | Serenity",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9FytfdocCW6khUz_W2Dwtv6cXLFZgUnD5VzQrMPtxjrx9K0Ye637wzYj4gXzimqiH9KuC91o7FV9mPR2UI"
    },
    {
      "name": "M249 | System Lock",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SM_WYGmiC_uJ_t-l9AXzhzEt25Wjcn4n4dHKebgMlCMB2RO5b40S-x9TnN-KztFDf3ohDzirgznQedTUXMuU"
    },
    {
      "name": "MP9 | Deadly Poison",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6BoIfSfF1iAzudlv-9WQyC0nQlpsm3Vy9f4eXvEPwcoCcNyQOBY5EWxwN3gNru0tFGK2d5Mny__iS8c5zErvbjRwweEJA"
    },
    {
      "name": "SCAR-20 | Grotto",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7uORe6dsMqLDMWuVwOVJvOhuRz39zRtx62uGm9z8JHnFaFR0AsAjRuQI40Sww9HvNunqtQTego5MmSX4izQJsHiOao_ijg"
    },
    {
      "name": "XM1014 | Quicksilver",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMXSZxuJ3j-1gSCGn20oksGTXy4yrIC3GbwYpCJF1RuQMtkG-koCyNO22tVSIiY1GxXn6iyhXrnE8nW2Det4"
    },
    {
      "name": "Glock-18 | Catacombs",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-XC2aEyfp5vO1WQyC0nQlptWWDzIz8dy6QalMgXsMiQbEJtRjskdW2M7nn71Dcj49Fm3qsiClB7jErvbhnnfwjgw"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "cs20_case": [
    {
      "name": "AWP | Wildfire",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7NkLPSVB3WV_uJ_t-l9AX7rxhl-tmzSwomtdC6TPwQnW5UkR-YD5kK-ltCzP-Ox4FfXiNoQyyrgznQeu9L0PzQ"
    },
    {
      "name": "FAMAS | Commemoration",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1c_M2oaalsM8-fC2CRwvdJt-5lSxa_nBovp3PUztn4d3qSPQ8kDMR5ROVb4xCxw9a0NLni4lCIio4QzXn32yMb6Sds_a9cBr1TwPEt"
    },
    {
      "name": "AUG | Death by Puppy",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_C9k7uepV6BoIeSbMWWJ_up5t-ZwcCW6khUz_W7RnNegdyqRPAcpDZdwQOAO5xW4w4C0ZemwtgHYjoNHniX6iSsd7Cx1o7FVmQFtzuc"
    },
    {
      "name": "P90 | Nostalgia",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V6piM-SSAmCZwNF6ueZhW2fgxBh25mmAyY6reS2WaAElCpZ2RrMOuxO6k4LnNuy2tgLejoIWyXj3kGoXuTP4YgZa"
    },
    {
      "name": "MP9 | Hydra",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6x0JOKSMWuZxuZi_rQ9H363xU5_4GrWnIr8IHqfbwBxA5R2QuZZshm6kdO2Mum35Q3ajoJbjXKp1xQlWoY"
    },
    {
      "name": "Glock-18 | Sacrifice",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-bC3Wf_uJ_t-l9AXHixRlytW7Ty4queH_DZlMlX5UjF-dZsUPqk9LhY-Lk5waMjdlCmSzgznQeEFBQhB0"
    },
    {
      "name": "M249 | Aztec",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiNK0P_8PP1SIeqHC2SvzedxuPUnTirnwEslsT6Gzd2sJHLCOlUpWJohE-MMsxW6l9GxPuy24AyL398QnjK-0H18Ww4Zdw"
    },
    {
      "name": "MP5-SD | Agent",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSJvKaMWuZxuZi_uU6Gn7glhxytWSAy4uqI3yTbA90WcQkRu4K5BG6x921Nb_q4w3f3YlbjXKpj8G4GlA"
    },
    {
      "name": "Five-SeveN | Buddy",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-Z6SHCMmRQguynLw4r9IHiRbFdzA8FzELYL4xntw9e1Mu7q5laMjN5AzXiqinxI6iw_t_FCD_TZbg2oLg"
    },
    {
      "name": "P250 | Inferno",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiVI0OL8PfRSKf6VC3WeztF6ueZhW2e3wUgi6z7WmI6gc3LDPQAgXsB2E7Veshbpl4DiNL_htQDZ2NlHy3qvkGoXuXYeEedL"
    },
    {
      "name": "MAC-10 | Classic Crate",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-XG3SE_u1ksfVscCW6khUz_WvVntmrI3KXOgcpXpQmRbYK5xe6ktLiYuLksVONi4tMyC_72CpN7nx1o7FVpG3zbwE"
    },
    {
      "name": "MAG-7 | Popdog",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSMP-DCmiX_uJ_t-l9AXixkBgm5G7VnN-rcn_Bb1UmWcBxFuACtRC5kNC1Zunr5wbdi4hEyn7gznQeG1-SDIY"
    },
    {
      "name": "SCAR-20 | Assault",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRe6dsMs-SHXSR1OJij-1gSCGn2xxw5GzWnNutdnKXagRxCMZ5TbYKtBbrl9WxPu7g5A2Ljt1HmXj5iSNXrnE819YWtjs"
    },
    {
      "name": "Tec-9 | Flash Out",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SJvySHW-vzedxuPUnFn21zRt_6znQmY6gdyiXbQckWMBzRLIPtBnrl9LvYeqx5FPd2ItMmzK-0H2aE-DSCQ"
    },
    {
      "name": "FAMAS | Decommissioned",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-dG2yV_vpzvvJgQCeMmRQguynLnouqJC-VbwciD5J3QORYshftkIXlPuzrtlCP2NlCySmvin9B7Xo_5_FCD_RaCEWnyQ"
    },
    {
      "name": "Dual Berettas | Elite 1.6",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_WfB3OV0tF1vOB6XCCwqhEutDWR1Ir4JS2UbQRxW5J5QLICsxi8ld3mY7jq4AeKj99FzCSsiy1M5y9q6r0cEf1yqEZuIxI"
    },
    {
      "name": "UMP-45 | Plastique",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSIv-eDFicyOl-pK8_Hn_hxh91sWrVyN-rI36XZwIoWJZ3FrMJ50XtxoLhZL625lCM2YxH02yg2Yusl7aN"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "csgo_weapon_case_2": [
    {
      "name": "SSG 08 | Blood in the Water",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29YKV_K8-fB2CY1aAmsbFtFnDilkUl5j7UzoqsInmVaFd0XMMlELYDshbuxNPvP-yxtlCMlcsbmlWiixNl"
    },
    {
      "name": "P90 | Cold Blooded",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_C9k_P6nfKxoMs-DVzevzedxuPUnSivqkBt_5m7Rw9v8cXmTZ1UjX5Z5EOEIuhK8koHuNe7r51fYjt4XyDK-0H2E4aJrDg"
    },
    {
      "name": "USP-S | Serum",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSIf2sC2uVwvpkueJWXSy3qhEutDWR1I34J3uXOwFyCsF4TeAJt0bpw9OxNrzh7gyI3t1DmHiq3y5M6HxqsrwcEf1yfEp4lzc"
    },
    {
      "name": "MP9 | Hypnotic",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_CNk-fe8fK1qL8-fB2CY1aAutbY-TXm2wkRz5zjdzNytIi3GbVQhW8ElRu8L5hK7mtfvNbu04lGMlcsbmn-Uk_5D"
    },
    {
      "name": "Dual Berettas | Hemoglobin",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1a4s2he7dkJumsHGKU_uJ_t-l9ASjjxEgm4mWHzYuhdi-RPVByD5pxF-ULshS6xofjMrzgs1eIiIxHnnrgznQe0T5dj0k"
    },
    {
      "name": "Nova | Graphite",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiNW0PG8fal9LPWsAm6Xyfo4teA5TSjnx05ztjnRz4v6dX2UZg8hW5B1EbMLtxW-k9XhMLjjslHbiZUFk3velnlINA"
    },
    {
      "name": "M4A1-S | Blood Tiger",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_iKMXWVxfp_t-R7cCW6khUz_WXWmdmpeXOWbA4jDJolQeMNthnrlIbiMO7m71TfjIpFxH-vjClO6CZ1o7FVlF3bnRA"
    },
    {
      "name": "Tec-9 | Blue Titanium",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNV0OanfKVjKeWeXTeG_uJ_t-l9AXnikBh-6mvTztz4eHvCOgIiCpFzQOAJ5xPulNK2Nr7q7gHcg9lEm3ngznQe7B1sAb0"
    },
    {
      "name": "FAMAS | Hexane",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1T9s2sZLFoKPWLMWuZxuZi_udoFn-2wBh04GXXnIr6dS2RbwUnDZNxQ-8D50OwkdK1ZOzi41OPiI9bjXKpn0lbjaM"
    },
    {
      "name": "P250 | Hive",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwipC0OCrbKxoOM-fB2CY1aAu6LltFny1xRt2tjuAzoyoI33BOgQpX5ByTOVY5xXql4HvNbviswbelcsbmoYK4S35"
    },
    {
      "name": "SCAR-20 | Crimson Web",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk5-uRf6FvM8-XD3WbxPxJvOhuRz39lEwhsGqBz9moJHmXawQhDsQhEOUNsBSwkdXiM-3k5AbZjo1MmSiojDQJsHiHhrZ4wA"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "csgo_weapon_case_3": [
    {
      "name": "CZ75-Auto | Victoria",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a_s2rfKdlJfSsDX3HlNF6ueZhW2fkk04i5WrXmY2sc3qfPFAlWZd3EOdY4Bi6loCxPu7h51fZjNlGzST5kGoXuTXAF0gA"
    },
    {
      "name": "P250 | Undertow",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNW0OL8PfRSIvWSCmKU_v53ue99cCW6khUz_W3dzIuueSqWblJ0WMNwFuYK4xawk9S0Y-7n4Afag4JDzSz73XtK5nt1o7FVPKoITvg"
    },
    {
      "name": "CZ75-Auto | The Fuschia Is Now",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2ofbduKPmSMWuZxuZi_uM-Sn_hlhgi4D_RnImrJC3COFIoApB3FLUP4RS9mtSzYu_r7wHZjopbjXKpFZZFzGk"
    },
    {
      "name": "Desert Eagle | Heirloom",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbapqMvGFC2Ovxet3t-1scCW6khUz_W3czNegeXueO1N2WZIkE-RY4EGxlNSxZLnn5gfai4oTniSoiStA6y91o7FVItTkIhw"
    },
    {
      "name": "Five-SeveN | Copper Galaxy",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRaalSI_-DHmKC_uh6teJiXBa_nBovp3OAnN_6cXvEOwFzDcFzQ7Vc4BPuwNy0M7jk5gWL39pCnC35jShN6S1p_a9cBt8cUyQh"
    },
    {
      "name": "CZ75-Auto | Tread Plate",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2qYaVgL_6XMXecwPpzj-1gSCGn20l_62-Bzd39cH2QaAYoD8ckE-9csxmxx9biML_q4w3Wi4gTmSyvjShXrnE8FqKNMu4"
    },
    {
      "name": "Tec-9 | Titanium Bit",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiNW0PSifbBoJM-HC2TJ_uJ_t-l9ASi3w0gm62qHzdz6Jy2WbAZxW8dyTOEIukawldfhY7zqtgKN2d9MyHngznQe9VU90c8"
    },
    {
      "name": "CZ75-Auto | Crimson Web",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1T9s25baZ-H_yaCW-Ej-0u4-VsH3G2x0x-sGXQyY76JXPGOAQkCMAlR-YNsBDqxtHhZerjsgTAy9USIjIDnE8"
    },
    {
      "name": "USP-S | Stainless",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSIeGsG3SA_v1isehnQyyghiIrujqNjsGqcHuVa1VxCcciR7MP50a5ktLuP-rr5ATXioJNyij93y0a7nlstboAT-N7rU1N1uE6"
    },
    {
      "name": "Glock-18 | Blue Fissure",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1T9s2teqV8NfWfG3WV_uJ_t-l9ASzixkp15W2Bntn4cnPGaFMkC8R1EeIL5hKxl9a0ZOLntQbd2IhBnijgznQeP57NAAc"
    },
    {
      "name": "P2000 | Red FragCam",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0Pq3V7RiLOmsDWadztF6ueZhW2flkRsm52nQyNquJ3nBaw4lXMFzQLNf50bpl9GxMePm7wyM3YoWmC_2kGoXucluK1Fs"
    },
    {
      "name": "Dual Berettas | Panther",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1I4M2-aap5KPWBMWuZxuZi_uA4Si-3kRx-sDzUn4r_cnPGa1AiApJwReRc4RXrwIHjMLu25AGP2otbjXKpeGQaAco"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "danger_zone_case": [
    {
      "name": "AK-47 | Asiimov",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeOaB2qf19F6ueZhW2e2wEt-t2jcytf6dymSO1JxA5oiRecLsRa5kIfkYr-241aLgotHz3-rkGoXuUp8oX57"
    },
    {
      "name": "AWP | Neo-Noir",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6poL_6cB3WvzedxuPUnHirrxR4l423SyI39I3KXPwdxWZclQeNZ5EXskYfnNeyw71OMi9lNzDK-0H3r66pOTw"
    },
    {
      "name": "Desert Eagle | Mecha Industries",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6OGRbKFsJ_yWMWqVwuZ3j-1gSCGn20h042vSyY2tdyjCZwIlXJBxQeNe4EWxxoHkMOq0sQGIid5Fnyr42HtXrnE8p4gbgvE"
    },
    {
      "name": "MP5-SD | Phosphor",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSJvWAGm6GwOJJtPNgXxa_nBovp3PRzd-vdCqQOgYgCMYkRrECskLuwdfkZeqz5QKMjYwUnHj33SlI630__a9cBl0Wy4S-"
    },
    {
      "name": "UMP-45 | Momentum",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbRSIeKBAXCD_uJ_t-l9ASzrx0txsWiBydv4JCmSaFdzDJt0TOYN5hbtwYWzNerl5QeIj4IXyX3gznQeadzF8t4"
    },
    {
      "name": "USP-S | Flashback",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uh6sfJhTSiwniIrujqNjsH6dnKfbAdxAsF3ELQCu0Hsmty1N76z71GIit4RySX_2CJI6yk9tucLT-N7rUYlhjC0"
    },
    {
      "name": "P250 | Nevermore",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNa0OL8PfRSJ-KSGGKUyOlxtfN6cCW6khUz_TjdmdeqdymfbVQlXpp0QuVYtBSwk9zmN-634gXd2tpCyH_2hipKunl1o7FVDpyoDiY"
    },
    {
      "name": "Galil AR | Signal",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6NsLPmfMXSZxuB3vN57Si2MmRQguynLnIqvIy-TO1UlXJMjEeAN4UGwk9DkZLnltgPYjYkTnCn6iy8buips5PFCD_QZl2QaUg"
    },
    {
      "name": "MAC-10 | Pipe Down",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-WFmiv0edmtfJWQyC0nQlpt2rRwtqhdHjFa1N1A5ZxEO4MukW4lNayNrnhsVDc3YxGzir9iXkc7DErvbgEiQoeZQ"
    },
    {
      "name": "G3SG1 | Scavenger",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-AD3GRxutJvOhuRz39xkl2tziGmNf9JX-WPQcpAsEiQOUNsBixx4bmN7nj5FHb3Y9Cyiz-hzQJsHglCU9Y5w"
    },
    {
      "name": "M4A4 | Magnesium",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSI_icHneV09FxuO56Wxa_nBovp3OAzo2vdHPFPFUmCJRxRbNZ4xewx9W1Nb7j4gzXg99Ayy73iC1Aun1q_a9cBiEfMG3G"
    },
    {
      "name": "Glock-18 | Oxide Blaze",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK6HLMWSf0_x5tORncCW6khUz_T_Xn9f6dnvDb1UkDsdwF7IItES6kYK1M-7k7wSI3YwQm3_63XlAvH51o7FVwJirs7M"
    },
    {
      "name": "Tec-9 | Fubar",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SJuWRD3WvzedxuPUnGiq1xBh_4D6Bytmrcn_CaFUlX8NyR-5ZtBG7kdzgZe-z5gTb3o9NyDK-0H2rKvLQog"
    },
    {
      "name": "MP9 | Modest Threat",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f-jFk4uL3V6diLP-dFzfB_uJ_t-l9AXGylx4ktmqAydmrInvBOAByWcN1EOUOtxe8mtS2P-vl4FaLioJMz3ngznQehlZuXhE"
    },
    {
      "name": "Sawed-Off | Black Sand",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F0vOBqRBaglBMjjDGMnYftb3qSOAF2XpV0ELMJsUS_ldGzMO_isVHagt9Az32ojiob6Hk9sbtXB6o7uvqARF8zTjE"
    },
    {
      "name": "SG 553 | Danger Close",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1c_M29b_E4c8-cGGKC_uZzsfVsSxa_nBovp3PSn4z_eH7Fb1V2DpckQeUJsRe8wNflMui0tVTX34MUyH2sjX8b7Xxu_a9cBmrf7Gwc"
    },
    {
      "name": "Nova | Wood Fired",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiVI0PyhfqVSKOWdGmKC_uxkpfVscCW6khUz_WiByIr8IyiXbQYlD5d1E-BftxW_lNbgMb7n7gyM3tkXnimr3C1O6n11o7FVLv86c40"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "esports_2013_case": [
    {
      "name": "P90 | Death by Kitty",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk7PO6e694LPyAMXfJkdF6ueZhW2fgkUh042jUnN2geSqTaFN2CcQmQuRfsBXtxtfkN7mztASIg91Bniv8kGoXucYQxgOQ"
    },
    {
      "name": "AWP | BOOM",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf9Ttk7f6vZZt-Kf2DAmKvzedxuPUnTX7mkxhy62iDzYqhdiqXbw4oWZEkE-IDsRa9lIXlMejktFOMi49MmDK-0H2AgUnw_w"
    },
    {
      "name": "AK-47 | Red Laminate",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wipC0POlPPNhIf2sAm6Xyfo4tucxS3rjwRx_42zRwo6pdSnCPwAmX5ohFOIJsUTqwdThNOi0s1TajZUFk3t5vdi_Cw"
    },
    {
      "name": "Galil AR | Orange DDPAT",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6BpMPGHMWiCwOBxtd5lRi67gVN-4WzRwomqeHKQOwEoAsdzRrENskK7wIXiM-m341feg44TzXr33C0Y8G81tE9ebY28"
    },
    {
      "name": "P250 | Splash",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwjFL0OG-ZKV-KM-DXDLA_uJ_t-l9AXDrxh4i62vTzNyrc3zEP1MpWJN2EOMN5kTpl9K2Zb62slTdi4NMzC7gznQe9E-5MVM"
    },
    {
      "name": "Sawed-Off | Orange DDPAT",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2mcZtpJOCSGlif0-94t-RWQyC0nQlp4GyAzoqsdSmWaFJyD5UhEeFcsBm-ktK0M7nj7wKI394Xn3-vhisfujErvbhk58vgGA"
    },
    {
      "name": "M4A4 | Faded Zebra",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFL0OirarZsI_GeMWWH_uJ_t-l9AXu3zBkhsDyHz4z9dXmVagJzW8MiQbFetBfrkNHhZbjr51CMiN8TyS_gznQeEoYBjXk"
    },
    {
      "name": "MAG-7 | Memento",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wipC0PutZ7dsKPWXHGie_uJ_t-l9ASjlzRl34WnUzN6tJy-eOg50C5N1TLYLthaxm4HlZbiz4AXXjNpDmCXgznQeeQk0p-w"
    },
    {
      "name": "FAMAS | Doomkitty",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1T9s2qZ6tgK_mHGn6vzedxuPUnTHrmxk1x6jmBmdb4Jy6QZw8jW8RwR-9esUHsltXnNu3n5VPXiY5AzTK-0H2q4sGvpw"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "esports_2013_winter_case": [
    {
      "name": "M4A4 | X-Ray",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0Oq8ab1SLaSsAm6Xyfo46LAxTHrgxU8lt2WHmNf7cS-Ub1JxDpQkQecO40OwxN2yZbvg41DciJUFk3vXysuZ3Q"
    },
    {
      "name": "Desert Eagle | Cobalt Disruption",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7v-RbKB9IeSXC2mDxNFmteBqQCq4qhEutDWR1I36c3OVbFQjDcRwR7EO4EW-x4HvMumzswfWjd8XnCn2iShM53s5t-0cEf1ycu8KccY"
    },
    {
      "name": "AWP | Electric Hive",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf9Ttk5_u4bZthKfebGinElLtytLVtG362x05wsWyByt2scHrGOgd1WZJ1ROBc4xi_ld3gNO7g-UWA3Kwc2RVq"
    },
    {
      "name": "FAMAS | Afterimage",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2seqtmJf6sHmaEydFwsexoXBa_nBovp3PQn46ucH_COwcoCMchTe4CshG7loG2NrmztFTajoIXyiitiCpLvSk6_a9cBkMHi1qM"
    },
    {
      "name": "AK-47 | Blue Laminate",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wipC0POlPPNhIf2sDGuFxNF6ueZhW2fhzE5_5G7dnt_7JXufa1J0DZAkE-cKtBaxl9WzPuyz5lDY3YpAzCn9kGoXuZPu7T4u"
    },
    {
      "name": "P90 | Blind Spot",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk4v2qe7RiNOOsAm6Xyfo4seVsTn3ikU0jt2nQnIqqJ3KeOA4jDJV0EOMPt0S7xNLjM76w7gLd2ZUFk3vvaUMV8A"
    },
    {
      "name": "Galil AR | Blue Titanium",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0POgV7BkNPGdB3Kdkr5gj-1gSCGn208jsDvRmNmqdn6fbw4iCJp5Q7Nb4xW8xNSzMenk7wbX341AzyitjitXrnE8X82UsFg"
    },
    {
      "name": "Five-SeveN | Nightshade",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRYL1SJvycGWKC0tF6ueZhW2frl08m5mrXyd-seSmVOgUkX5MhReRcsRHsm9LjZe_htACI3oJEzHj6kGoXucu6NwSL"
    },
    {
      "name": "P250 | Steel Disruption",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNW0PaqeKV5JPWdHWKv0ud6puR7cCW6khUz_WmGzIqrc3mVOlN2CJF5Re4CskWwxoW0PuKzsVaL3o9Mn3762H5I53l1o7FVezFvgCM"
    },
    {
      "name": "PP-Bizon | Water Sigil",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1T9s25abBoMs-QHGKD1dF6ueZhW2frwRwh4j7VwoqpdHyWPQcgCpd2TbFYsxC-l4a0Pu2ztA2NgtkUzST-kGoXuZ4FYcbA"
    },
    {
      "name": "Nova | Ghost Camo",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwjFL0PGvZatSN_-cCliSzftzj-1gSCGn2x9ytmXRzt36dH_EPw9yD5R1ROYCtBO_x4LhMO2wslfZiotMxX6viitXrnE8JeKdjD0"
    },
    {
      "name": "G3SG1 | Azure Zebra",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1I_820baZ_IfOSA1iSzftzj-1gSCGn20tz6jjXnN-pJSiUOAIlD5FyR-FYuhbtwdSyMb_l4VPajI1FyCSo2iJXrnE87owZcUA"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "esports_2014_summer_case": [
    {
      "name": "AK-47 | Jaguar",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0OKvZrBlJeKsD2zEltF6ueZhW2fhzUwi4WuBzNv6dCiWPVUgApV0TLIM40SwxNLuN-Pl71fdjogXmy79kGoXuYeqaPqj"
    },
    {
      "name": "M4A4 | Bullet Rain",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0PC7ZKhoNM-BD26e_uMisbBWQyC0nQlp4GmGydioIH3DPFMjDMd2QrQO5hDtkNK2Ne_htAXd3d0Uyiiriysb5zErvbh6fsb98Q"
    },
    {
      "name": "AWP | Corticera",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk6fO4bahsH_GEHlicyOl-pK8xTSzqwU1-5jjWno6hJHyeOg91A5R2TOEOtRS-kIG2ZeO25lDYg90U02yg2USK57Qn"
    },
    {
      "name": "Nova | Bloomstick",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0OG-eq1jJ8-dAXGR_uJ_t-l9AXDrxU4msD_UzN2qIy6Va1chXJJxFu8OtBO5l9fjZLnh4wXd3olBmCzgznQeBg5SBVo"
    },
    {
      "name": "P2000 | Corticera",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V6JsNvWfD1iAk74m4N5lRi67gVNzt2TTyo6gdH6XPwEiCcZ2RucC5BG9kdTvZe-24QSIidhHyimoiC0b8G81tLsWWhFO"
    },
    {
      "name": "AUG | Bengal Tiger",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf9Ttk-_upbbZSLPmUBnPeme1z5LU7F3_gxk9xtj6Em4yveCrDOgIiW5cjRrIL5hnuk9TkM-rr5hue1dxoTofnTA"
    },
    {
      "name": "Desert Eagle | Crimson Web",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk5-uRf6FvM8-XD3WbxPxJvOhuRz39wEUh5W3Rytyscy7FPAYgWJJzRe4MtUW8loKyZOm3sQzb34lEzyX32zQJsHig-EWd2A"
    },
    {
      "name": "Glock-18 | Steel Disruption",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a4s2qbLRsNPSWAHSV_v1_vPdsXRa_nBovp3PWmYuhdnyebAdyWJUjE7ResBC6xoXhZe_j7w3Zid1Aziio3SlI5iw__a9cBqG4HP4O"
    },
    {
      "name": "MP7 | Ocean Foam",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_C9k4OG9YaJ0H_KfG2KvzedxuPUnGX6xlEl2tWmEzdyrd32RbQ5yXpB5RuIK4xaxxIGzY7zl5gza2YITnzK-0H3lsKvKCA"
    },
    {
      "name": "P90 | Virus",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk9f2jaq1oH_yaCW-Ej7l0tLY8Fn3jk0h342jRwtz9In6TOg4kDZImQ-4Nshi4w9LmNOnh4wHAy9USHtJ8vvM"
    },
    {
      "name": "PP-Bizon | Blue Streak",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1T9s29eKhsNOSWHFicyOl-pK8-Hyzjx0t1sWjdy4v_dXyVaFcpC5ElTO4OsxSxkILjYu3k5wKM2dlG02yg2QMXfH6m"
    },
    {
      "name": "USP-S | Blood Tiger",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSKOmsHGKU1edxtfNWQyC0nQlptWWEzd-qd3mVbgR2WZYiFuUMtUG7x4HhYeLhs1fZiN1DnC6viH4Y7TErvbgp6HjWjQ"
    },
    {
      "name": "MAC-10 | Ultraviolet",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1I4M2-fbZ9LPWsAm6Xyfo457RoS3vlzRx2sWWAzNz4dXvGbQ9zCsZ1FOMI40G4ktDvY-LgtQ3YipUFk3sgu3LoQg"
    },
    {
      "name": "Negev | Bratatat",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2seqV5IeSSGliexOlzpt5lRi67gVN2sDzUwtevIy_EZwZ1DZclEOANu0brmtDuPriw5lTejdlHxSv3iilA8G81tKRsmgNk"
    },
    {
      "name": "CZ75-Auto | Hexane",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1T9s2sZLFoKPWLMWuZxuZi_rBqS3vrkRxz5W7dnN2oIyiTZgYhXpN5EOIPsUbsloC1M-_qs1HdiYlbjXKpP5VEBps"
    },
    {
      "name": "XM1014 | Red Python",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk5-uRe6psK_WABW6e_vxztN5lRi67gVN05G3dyt77dXjBZ1MpWJQmReRbthbpxNDvZb6x4AOP2oMRz3_42ntJ8G81tDf1ocTs"
    },
    {
      "name": "SSG 08 | Dark Water",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1a4s20baZ_Ic-XD3Wb_uJ_t-l9AXriwk1y6mqDyov9eXyTaAFzD5R4RrFYsRC4k9fhML7itQGPio9EyX_gznQeRZeU19w"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "falchion_case": [
    {
      "name": "AWP | Hyper Beast",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6x0MPWBMWWVwP1ij-1gSCGn20pxtm_WzNuoeHKeaFAnCZUiTe5bt0HqxofmZOrm5Q2IjoMQzS_5iShXrnE8NzWs__c"
    },
    {
      "name": "AK-47 | Aquamarine Revenge",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-GHGaXxNF3vPVWQyC0nQlp4WvVzturJ3qVb1B1DMd3Q7EO5xW_l9O2ZOLg5gyP2N9BxST_jXwY7TErvbj-FmM1dA"
    },
    {
      "name": "SG 553 | Cyrex",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-QF3WV2dF6ueZhW2frlhl14W7Xzt6geXqQP1N0CMRyQuFY5kHsx9HmZejq7wPei91AzCT_kGoXueC0Dzdv"
    },
    {
      "name": "MP7 | Nemesis",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V6poLeOaHVicyOl-pK87Hyu1kR5_5j_WntigcXmXOlBzCZUjQeMLtBG6x9HuNrvl4gCP2I1B02yg2TXalB0S"
    },
    {
      "name": "CZ75-Auto | Yellow Jacket",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4Ic-QBmaD1edstfNWQyC0nQlptjjRn9z8cHjBbgB2WccmFOAPukbux9zlP77nsQXf3YxFzSX9iy9AvDErvbgg0Q8tFg"
    },
    {
      "name": "M4A4 | Evil Daimyo",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJeaaAliUwOd7qe5WQyC0nQlp4GqGz42ucCqXaQMhDpd4R-AIsxK6ktXgZePltVPXitoRn3-tjCgd6zErvbijVJZd2Q"
    },
    {
      "name": "P2000 | Handgun",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PO_V7Q_cKDDMWWfzuNJvOhuRz39xE53sWncnN2vcnKeaQAlA5cjRuUL4RTqxN3nP-ix4QCLjIIQyHn2iTQJsHgxqMM--w"
    },
    {
      "name": "FAMAS | Neural Net",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a4s2oaalsM8-XAXOD_uJ_t-l9AX_lzB8ltmXcnoqvInjEPQEoC5AjELRY4Rm_lIDmM7zlsQ2L3YsQxHngznQe8yNao04"
    },
    {
      "name": "MP9 | Ruby Poison Dart",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_C9k4uL3V6pkNOKcCWKe_uJ_t-l9AXzhkEsm527Xy9r_JynEP1IiWJZ3FOYP4xTqmtznNO-34VCKiYJExSjgznQeVzj6siQ"
    },
    {
      "name": "Negev | Loudmouth",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_m5Hl6x1Y-s2gbaNoNs-SAGmZyed6sfVmXRa_nBovp3PXzousdnrBbgEiX5QjTbICsEa7ktTnNOPrsQLW3YoQyS33jygbuHts_a9cBgJfeVOc"
    },
    {
      "name": "Galil AR | Rocket Pop",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V6NsLPmfD3Wv0e9kpOhqQyygqhEutDWR1Nf8eXzDP1InCMR3QucIshjrktexMOqz4QPcjo1Gz3qq2H9L5ylu4ugcEf1yh3Lp9zc"
    },
    {
      "name": "P90 | Elite Build",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-V6lsM-SWHH6vzedxuPUnHyi1xE9xsGiDmdqpdnmRPwcgDZslRuAM40Trx93nNevj7gOPjdlGzzK-0H27CoeJJQ"
    },
    {
      "name": "Glock-18 | Bunsen Burner",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a_s2pZKtuK6HLMWGcwONzo95rQzy2qhEutDWR1Nb7IC-TOw4hCZF5FOJe40W5lILlZLvktAHXiIJMyST_3XlIv3k94escEf1yWue1sjU"
    },
    {
      "name": "USP-S | Torque",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_v5kv-Z7SjqgnAsYvzSCkpu3cH2eZgcgD5cmTOQK5BftlobvY-zk4gCN2I4UyX-s3XhI7S4_supXA71lpPNCDDeLhA"
    },
    {
      "name": "UMP-45 | Riot",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1Y-s27ZbQ5dc-GHnWfwPxJvOhuRz39lx8h4DnXw9f6cCiWbVNyXsYhF-RbsxK5m9LhMevmtVDeg4JAyyr3jDQJsHgJoZgLvA"
    },
    {
      "name": "Nova | Ranger",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSMvGdCWKC_uJ_t-l9ASvqxUhy6mWAy4v7dnuRZlJ0CpR2Q7Nbtxe7kNO1MOu37lSP2N1HzyXgznQe-r9EaTk"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "horizon_case": [
    {
      "name": "AK-47 | Neon Rider",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6poL_6sHG6UxPxJvOhuRz39xkQhsTnVzoygdy7Ea1UoCZQkRe9bs0brl9TvN-m0tVHYjY5CyS35jjQJsHhk4o5zcA"
    },
    {
      "name": "Desert Eagle | Code Red",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk6OGRbKFsJ_yWMWaXxvxzo_JmXRa_nBovp3PRmNj4c3mTb1RxC5cjF-EItRnrlNzkYrnk5gaI3Y0UmyX52H9K7ixs_a9cBsGEcOCn"
    },
    {
      "name": "M4A1-S | Nightmare",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-9gSCGnmBw1tgKJk4jxNWXCbAUpXpp0FrYPthC7k4fnZOm04laMjYxHn3r52HxJ6i065e0FVKV05OSJ2IHiKyzQ"
    },
    {
      "name": "FAMAS | Eye of Athena",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-cGWuvzvx3vuZscCW6khUz_WzUnNb6eXjCbFV2WcAlTO5ct0G-xIfgZe63tADb34wTzX2qjXlO6Xx1o7FV19iwjVc"
    },
    {
      "name": "Sawed-Off | Devourer",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9FytfdmWju2hyIrujqNjsH8JSnBPQdxDcEiF-FZshS7kdG1NOyz4wKKiYNDmXn3jHkd5n055ulTT-N7rdPAUyyq"
    },
    {
      "name": "AWP | PAW",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7uW-V7RsN-CSGVicyOl-pK84Tn-3xkgltWWGnI39c3LDaA4lD5V0QO8It0LqktfuMOrq7gDajYJG02yg2bUm5WIV"
    },
    {
      "name": "G3SG1 | High Seas",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-RG2STwOBztfNWQyC0nQlp4j7Syt-rdHPEOAIjCpV5TLQK40K5wdLjY-_r7wfeio1AySiriCIf6DErvbj1Mwus0A"
    },
    {
      "name": "CZ75-Auto | Eco",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H_WQAVicyOl-pK87HivqxR5xt2_Qnt6qI3-fPFciWJBzRuFZ5Ba_moG0Mrm04lfajYwQ02yg2Q7xomN1"
    },
    {
      "name": "Nova | Toy Soldier",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSNP-KMXSfzep_tfNWQyC0nQlp42zVytutcCmTZgchW5omTbNc5ka8l9XvM77jtACL34lBm3__iShI6TErvbjr52W2-A"
    },
    {
      "name": "MP7 | Powercore",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf-jFk__25bbZuL-KWMWqAltF6ueZhW2fjkE114W7Vzduqdn2XOAYhXpMlEeQI4BW9kofiZOzq4VHXg9hGzi78kGoXuRPPGxs7"
    },
    {
      "name": "Glock-18 | Warhawk",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK8-HBnKexetkj-V8XD2MmRQguynLwo34eXjBbgQnCMB1Q-QN5EXrkdfkNu7m5Ffd2YoTzyr52H5B7nk-5PFCD_Q2xs5K0Q"
    },
    {
      "name": "MP9 | Capillary",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V7JoKf6sAm6Xyfo457c6SXDrw0VxsmmAzor6IimePwApApYkQLFY5ES9lYCzZO7j7lTZiZUFk3t71H43DQ"
    },
    {
      "name": "P90 | Traction",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf-jFk_6v-V7B_JfGXMWuZxuZi_udvTHDjzUVxsm-Aw9auIniRPQJ2XJVyEONetxDuk4HiNeu24VSP391bjXKpopWoUos"
    },
    {
      "name": "R8 Revolver | Survivalist",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2tfZt_eM-AG3WGyPh3vOh6Wxa_nBovp3OBzditcSmSOFUnDsEiE-4MuhPqw4bmY-jisQff2dhGnCyq2n4a631v_a9cBkWPt9yi"
    },
    {
      "name": "Tec-9 | Snek-9",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SM_6SBWKvzedxuPUnHH23wEpz6j7Rydqqdy6SPwcoDpV0RrEN4Ra_x921ZOPitVDdiIpDmDK-0H1esiynQw"
    },
    {
      "name": "Dual Berettas | Shred",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1I_82rZK15JeOsGW6e1etkj_NoRi22hyIrujqNjsGrJ3rGbQAgDsEhE-YJ5he7w9TgZOnrtgWI2oNNxCv6hixP7SZitrpRT-N7rUuDq4Qp"
    },
    {
      "name": "AUG | Amber Slipstream",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf9Ttk7uepV7BiMv6sAXWRz-lzj-1gSCGn2x8msm2Dn9-oeSnGbAAiXppxE-cMs0Prm9a0Mrnqtg2L3dgQzS2vh3lXrnE8QYlxFJI"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "huntsman_weapon_case": [
    {
      "name": "AK-47 | Vulcan",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSMuWRDGKC_uJ_t-l9AXCxxEh14zjTztivci2ePQZ2W8NzTecD4BKwloLiYeqxtAOIj9gUyyngznQeF7I6QE8"
    },
    {
      "name": "M4A4 | Desert-Strike",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0OanfKVjM-ScHGqvzedxuPUnHnjnxEsi4WTTntqucnuUaA92CZR2E-IDtRa-mobnYeLksQbXg4hDyTK-0H1Bbz5yqg"
    },
    {
      "name": "M4A1-S | Atomic Alloy",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GeMWrEwL87o95oQyW8jCIooTyLnYrGLSLANkI-D5d2FrENtRG7wNDvZe-3slfci9pFmHj8jSof6yZjtugEB6QtrKTXhxaBb-PhITXxPA"
    },
    {
      "name": "SCAR-20 | Cyrex",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRe6dsMs-QF3WV2dF6ueZhW2fgzUR_52nUzYugICnCPVImApYkRO8NtkLtw4a1Nbzn7lSN2oITnCr5kGoXuXXxbesR"
    },
    {
      "name": "USP-S | Caiman",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsBWaZzO94j-1gSCGn20t-4WyBn4mocC6XbVN0CMB2RLYMsUG5x9DgN-20tQSNiI1GzS2q3XtXrnE8NAiGp64"
    },
    {
      "name": "AUG | Torque",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV7R_L_eBC3SDyPhJvOhuRz39lxhxsm_WzN37Iy7CbAcmC8B2QuYPtRCwx9HvNr-xtQPaj95EmS__3TQJsHjrLu4xbg"
    },
    {
      "name": "PP-Bizon | Antique",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-SAHOZ0Ptzj-1gSCGn20sj4DnTyN2pdyjFOg4oXJV5Qu5c5xS9w4bjNL7q7gHd2INGxCn_iyxXrnE83Efvvd0"
    },
    {
      "name": "MAC-10 | Tatter",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2lZ7Z4MOSsAm6Xyfo4tbY7H3q1xRt152TWyt6tc3ifaVcmDppxReVethawlYHmNO6ztQbciJUFk3uxmhdQIQ"
    },
    {
      "name": "XM1014 | Heaven Guard",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMW-VwPhzvt5uWiihkSIrujqNjsH7cHLFPwd1WZsiFrJYuhC4lNTuNu3n5ASN3YxEniStjSMa6H45675UT-N7rZnbv6eE"
    },
    {
      "name": "Tec-9 | Isaac",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiFO0Oara_1SIeOaB2qf19F6ueZhW2frlEpz6zyAy477dXrEagFxDcclRO4C5EK8wIa1Nem3s1TdiotNzCn5kGoXuYgN6W8t"
    },
    {
      "name": "SSG 08 | Slashed",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-aA2qf0_p3vN5kSi26gBBp62XXyon_eHKXagYoC5ZwFLQNska7lIfiY-rgtVCN2IxExX_9h34buDErvbiGjEi-fQ"
    },
    {
      "name": "Galil AR | Kami",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6NsLPmfMWyRzOdJvOhuRz39wkl142uEwtqsJ3OealV1DZYmFuNZ4xTtx4HnZuPl4gaLjdpNnHqt3TQJsHjaThnzjg"
    },
    {
      "name": "P2000 | Pulse",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMXeFzf1zj-1gSCGn201wsTnRm9egcS7DaABxDZckQe5Ys0S6xtKxZO-wsQDbi9lMxSv-jS5XrnE8fJdFk9o"
    },
    {
      "name": "CZ75-Auto | Twist",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1a4s2pcbZsNPWsAm6Xyfo45bY7TXzjxk5w42XXn93_cnLFOFN1C5t0ROANsBLtx9ziNu6x4FHejpUFk3uH-TvaLw"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "operation_bravo_case": [
    {
      "name": "AK-47 | Fire Serpent",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0PSneqF-JeKDC2mE_u995LZWTTuygxIYvzSCkpu3cnvFPQB2DpUkROFY4Rntw93lP7i241DbiI1BxSuviHlKunk_6-sHU71lpPMTRLyP4Q"
    },
    {
      "name": "Desert Eagle | Golden Koi",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7v-Re6dsLPWAMWWCwPh5j-1gSCGn20om6jyGw9qgJHmQaAcgC8MmR7IMthm5m4W2M7zj7wOIj4pGn32o23hXrnE8VHBG1O4"
    },
    {
      "name": "P90 | Emerald Dragon",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk6-Cvb6tjH-DKXliS0-9gv95lRi67gVMm4m3Vzdmqci-SO1clX8Z1QeYO5xi5mtTuPu7l4FDc2o4TmH32jC1P8G81tLxM49od"
    },
    {
      "name": "P2000 | Ocean Foam",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0POjV6t-M_mVF1iSzftzj_E7H3njqh81siuKpYPwJiPTcA91W5N0EOMNskGwkt3gP-vh41GNiNpDn3r83ShL6itj4bsKA6Im-_XJz1aWVAZrXOc"
    },
    {
      "name": "AWP | Graphite",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7OC7ZbRhJc-RHGaGztF6ueZhW2e2k0l2sW_WzN7_cS6SbgV1CsF3TOEI4EOwloGzNLzg5g3fiIpHxC78kGoXuTqeOjwH"
    },
    {
      "name": "USP-S | Overgrowth",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSKOmsHW6VxutJsvNoWSaMmRQguynLytyqdy2eaVUgAsB0QeIIsxfuldy2MO3gtFSI2ooRzSiq3HxA7SlvtfFCD_RGjmYWyQ"
    },
    {
      "name": "M4A4 | Zirka",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFL0OG6abZSIuKSGGivzedxuPUnSXnqkBwj62vTn9b8cyjBOlNxD8Z2Te8L5Ea8xtbkNe6z7lTajotCmDK-0H35HfkCFQ"
    },
    {
      "name": "MAC-10 | Graven",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a_s2rfKdlJfSsA2aTkL5JsvNoWSaMmRQguynLztytdHieOA92W8N5Re4D4ELtk9O2Nbnq5FfWjIkRn333hn9O731j4_FCD_RXlm8jng"
    },
    {
      "name": "M4A1-S | Bright Water",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_iKMWiTxO94j-N7Tj-8qhEutDWR1N2scy2Sa1UkC8NyRbMPuhexx4fgYrziswHf395Az3-qiStK5i864-kcEf1ycufvRr8"
    },
    {
      "name": "SG 553 | Wave Spray",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1I_829eLZsOc-ED3GV0tF0ouB_QBa_nBovp3PcwoqtdC3BOwQkCZB3QOIIsxm_kNyyZuzg7w3f2YNEnn6qjS0Y6Clq_a9cBmkkHSs4"
    },
    {
      "name": "Galil AR | Shattered",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0Pq3V6d_Nf2DAmKvw_x3pu5WQyC0nQlpsm7dn96tcniROgMoX8RzFuIJtRPqxtXhMujjsgLYjIlEzS-ojiIa5jErvbio8HB-SQ"
    },
    {
      "name": "UMP-45 | Bone Pile",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1I_829Y7FhLM-XB2aX0-97j-N7Tj-8qhEutDWR1I6rcX3GblRyD5V1TecIsxPukdbuYeqz4Q3ZjopMyiyrjHgfuCdqt-kcEf1yvOcVYJ0"
    },
    {
      "name": "G3SG1 | Demeter",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1T9s2sZLFoMP-fF2Cfz9F0ouB_QBa_nBovp3OEnoz4cHnFZgMnD5R5TeQP40Swx4XgNLm34g3ei49FxC2qiXgbuy9t_a9cBh-mV6Cr"
    },
    {
      "name": "Nova | Tempest",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwipC0OGrabdkJPWsDHWR1-FJvOhuRz39xUUk4jiHyt_9cXzGZwV2CJJyQbYN4Ua9wdPiZr6x4FTcjIhMzXmsjjQJsHjYOlWGdQ"
    },
    {
      "name": "Dual Berettas | Black Limba",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s29baV-L_6sC2uZ1etlj-N7Tj-8qhEutDWR1NyuJC6SPQQoC8N1TLYMthC_kNTmMOKw4gLe2osWmC6vhylB6C5i4OscEf1yNRLqhkE"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "operation_broken_fang_case": [
    {
      "name": "M4A1-S | Printstream",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_F7Rienhgk1tjyIpYPwJiPTcAAoCpsiEO5ZsUbpm9C2Zuni4VHW3o5EzSX62HxP7Sg96-hWVqYi_6TJz1aW0nxrkGs"
    },
    {
      "name": "Glock-18 | Neo-Noir",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-dAW6C_uJ_t-l9AXznwh9zsjjSn9j9dH-eb1V0CsF3QrNZ4xW8ltPlM-7h4QbYit5NzyzgznQecekkTuo"
    },
    {
      "name": "M4A4 | Cyber Security",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSI-mRC3WA1OB9j-1gSCGn2x9-527Tyt-pcnyUagQlW5JxEOIOuhjrw9XlMrixtQTd2NhNmH_5jCNXrnE8Cu1wa6c"
    },
    {
      "name": "USP-S | Monster Mashup",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uVkv-pmXBa_nBovp3PQn46ueX3FbAB0WZMjTe9csEKwk9XvNbnl41Tcj48WzHqv3HhP5ydj_a9cBuLIfNg1"
    },
    {
      "name": "Five-SeveN | Fairy Tale",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC1iDxPhzvt5tRiihjCIrujqNjsGtdi-UbVUgXJAlRrFfuxi-lNbuPr7ltA3cjtkRzyit2H8c7H1t4O9TT-N7rZbBTJfn"
    },
    {
      "name": "AWP | Exoskeleton",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6F1L-OYC2uV1eF4j-1gSCGn20km5zyEmd2qc3uWZwcnA5MiELIJtxa_w9OyN-nh5wKKj4kTyn78hyNXrnE83OTew2I"
    },
    {
      "name": "SSG 08 | Parallax",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-QBnWfzO9iueJWQyC0nQlp5G6AnNuhJXmeOAd2CsMjQOUMuxC-moHgNOzh5VPXjogRmyn_iSNI5zErvbhpsYYNZg"
    },
    {
      "name": "Dual Berettas | Dezastre",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_WfB3OV0tFytftoXD2hkCIrujqNjsH4c3qeOgR2XpJzFOcD4BK_m4HmN7mx5wGIjthDxHn23yhLv31u6u4HT-N7rWmjRO8T"
    },
    {
      "name": "UMP-45 | Gold Bismuth",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1c_M27ZbRSJ_-fCliSyP17pfVhcCW6khUz_Wrczt__dn3GbVR0D8dxEOAMsxW9lofkMum04w3eg4kXzy6q339BvHx1o7FVa_qMENU"
    },
    {
      "name": "Nova | Clear Polymer",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSMP-fF2qV09F6ueZhW2exxkR-tmWEmIyoJXyWZw4iDsclROVftxm7wIe1NbizswPe2YlHmCuvkGoXuVU3K7Ec"
    },
    {
      "name": "P250 | Contaminant",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSKf6VC2SE_uJ_t-l9AXG3xUt-4jjcn4yqIHLGO1QkDsZ4TeNetUK4m9eyP-6xtVHcjd5DzSrgznQee4rYsVM"
    },
    {
      "name": "Galil AR | Vandal",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfMXGRz-p3vN5lRi67gVMj4mzVw92tdHKXPwcjD8AhR-YKtBe8mtHkNLvgtAGIjd0WxCyv2CNI8G81tKkB1-EH"
    },
    {
      "name": "M249 | Deep Relief",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiFO0P_8PP1SJPWWHliCxOJ_tedWQyC0nQlp5DzUzIyqcnyQOAckWJckQu8KuhnpkdPgNu-0tgTYio5Eny2shnsd7TErvbi9QVp9bQ"
    },
    {
      "name": "MP5-SD | Condition Zero",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSI_-dCm6EyOF4quR7QBa_nBovp3PQz93_InrCbAVxCcN5RbNZthm7w9e0Y-q35gbdi49GzX2vjCIf63xr_a9cBnKSfiDi"
    },
    {
      "name": "CZ75-Auto | Vendetta",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1c_M2tcvM4H-aWAGOV1fp3j-1gSCGn205ysWiEw9iqInueOAZyD5J1EOdf4Ea9l9bmMb_q4AaI2NhGySz6iStXrnE8_AWQoqE"
    },
    {
      "name": "G3SG1 | Digital Mesh",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-XB3SC1P5ij-1gSCGn20wh4m-By9-qIC7COA8jWcNxRuUPshe6kNfnYe62tQ2K2NpHmXj2iC9XrnE82YBIy5I"
    },
    {
      "name": "P90 | Cocoa Rampage",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Ttk_6v-V6BkLv-sHGad0e9xtd5lRi67gVMl52jUztr9cn7CbQEmWZV1R-ED5BHqx9G1PuOxsgWM2N4Xniqrh35L8G81tGacA9-f"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "operation_riptide_case": [
    {
      "name": "Desert Eagle | Ocean Drive",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ_yWMWyZ1e1-j-1gSCGn2x5-sG7Wzdyvc3OSbgcnXpR5FO9bukTtm9WzMePhswaN2N5CmCj_jyhXrnE8ibjhEyc"
    },
    {
      "name": "AK-47 | Leet Museo",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSIfKAGnWRwvpJvOhuRz39xEly6jmHmdiqeS6UawMmCsBzFrRb4BLtx9DgPr635A3Xj45GySj5jzQJsHjwtGRbjQ"
    },
    {
      "name": "SSG 08 | Turbo Peek",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6NSL-aWHHORyutJvOhuRz39k01z62jTmIv6dC6WPQdzWJYiQLYL40K4koG1Ze-35wze3dpMnyz63TQJsHim_V6lkw"
    },
    {
      "name": "Glock-18 | Snack Attack",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-AAGaTyu9ipOBqRBa_nBovp3PQyomrcHKSaQYkCcRwQe8LukHswYHhN-Kz7lOM3YoUni6tjn5K7C5u_a9cBhxPlKk2"
    },
    {
      "name": "MAC-10 | Toybox",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-HAX6SzvZJvOhuRz39zRkismnVy9uveXqfZgYpW8R0TLRbshHtx9HvN77g5Qzbi4wTyniojTQJsHhO4vjwuQ"
    },
    {
      "name": "M4A4 | Spider Lily",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6V6JhL-eWHHSvzedxuPUnHXiwlk4lsTvUz477ICiRPw52WJNxROICtxK-wYDhZejm5gCP2I9MzjK-0H1trtkVHA"
    },
    {
      "name": "FAMAS | ZX Spectron",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-AHmKT1fx5vt5lRi67gVNxsDvTyNyueHOeaVVzCcN1EbVZtRK5k4LkNOnj4wbe2tlMxH_-jyNN8G81tGqq3pxL"
    },
    {
      "name": "MAG-7 | BI83 Spectrum",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSIvmAA3KEydF6ueZhW2fml0Vw4mWGnN2udHmSOgAoCJMjQOJY4xK8k9XvPu-x5Qba2N5HzH73kGoXuQbKMJGE"
    },
    {
      "name": "XM1014 | Watchdog",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk6OGRcKk8cKHHMXCR1e1-tO5ucCW6khUz_W2Dz9ehdHuWZwN2CJd0EOYDt0LpxNG2Zr6w4w3ei48UyC2riCJN6Sl1o7FVTxWp7to"
    },
    {
      "name": "MP9 | Mount Fuji",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_CNk4uL3V6J4KvmsHm6eytF6ueZhW2fgkUoh5m7dnt78eC7FPFQgXJByE-AL5Bixld20MO2x51DX2o1NxCyokGoXudOiZ_SY"
    },
    {
      "name": "USP-S | Black Lotus",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_ux6seJicCW8gQg0jDGMnYftbynFZg8nXpt2Ru8D5hSwl9PhN7_m7wzdjotFxXr62y4Y6C894OxQVKA7uvqAvobUkb8"
    },
    {
      "name": "PP-Bizon | Lumen",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1c_M2sYb5iLs-VAmaDyetkj-1gSCGn209-4mzRn9irIimXOFRzCpAhQORYu0bqw9HhNuix4Aba2opCznr72ipXrnE8UpZyTdo"
    },
    {
      "name": "AUG | Plague",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf-jFk7uepV7RhIfeGC1icyOl-pK8_GH7hzUx04WSByNj4JXuRaQJzXJclEO8MthHpl9DhYejjtAeL2YMU02yg2aipyCXk"
    },
    {
      "name": "MP7 | Guerrilla",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V69lIfuaMWuZxuZi_uU7Hy22xE5x5TnWyYqvIi2SaVN0C8d1QeVf4RC-kdC0MOPl4Qbf2dhbjXKpOJ4z2JA"
    },
    {
      "name": "Dual Berettas | Tread",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_KWHGKE1e9lj_V7Sii3qhEutDWR1NmhcnPEPA92CJBxQeUNsha-ltC0ZOnltQHfjI1Gn3r7jy9N7npvsb4cEf1yGJF-WOQ"
    },
    {
      "name": "G3SG1 | Keeping Tabs",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-HD2SEyO13vOxoXxa_nBovp3OHzouqcHqRZwBxDcd2EOUDskXtl4DmYevi4FGLg4tDz3n4iylB6Xw9_a9cBgS1m-61"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "operation_vanguard_weapon_case": [
    {
      "name": "AK-47 | Wasteland Rebel",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0Oa8YaZ4NPWsD2zEltF6ueZhW2fgkEh35m3cmIusIn6TbwMpWJJxReMKtBHsw4HhM7nh4gTc3YJCxXr2kGoXudZyw1tq"
    },
    {
      "name": "P2000 | Fire Elemental",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMWGZ0-tJte1sQiy9gRwrjDGMnYftb3-RZldxWJVyF-QLsUG5mofnML_qtg3cjd4TyCr4jXsf63lr4-5TVvA7uvqA-y0nTh8"
    },
    {
      "name": "M4A1-S | Basilisk",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GCMWrEwL9lj-NoXCC_nA4sjDGMnYftbyqVPwUiX5V5ReUDuxC5m9zmNOPktAHYiIgXzSz43C4a7Sg_6uZQVKU7uvqA7bOYRbA"
    },
    {
      "name": "P250 | Cartel",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiNK0OL8PfRSI_GBGmKc_uJ_t-l9AX2wlh906m7Uy4v_cXqWaA4gCpUmQLMNsBO_ltfiYuPltAHbgthGmyzgznQeqxXZ9kg"
    },
    {
      "name": "SCAR-20 | Cardiac",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk7OeRe6dsMqLDMW6e1etkpuRnWyC8myIrujqNjsH9cniTaFApD5R0F7EJsUG_k9bjM-3n4gLY3opBzCio3yxK5io55OdXT-N7rWZZlsYh"
    },
    {
      "name": "Glock-18 | Grinder",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a_s2pZKtuK8-QAW6cxOpJvOhuRz39w00lsG-BnNj7cniROgd1WZRzReIDsBewk9G0YeOw5gWPi40Xnnr4hzQJsHiNyVoujA"
    },
    {
      "name": "M4A4 | Griffin",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJ-KaCGGZz9F6ueZhW2e2zERysm3Umdesd3rGald1DpRyQLVbtUa5mtPvYuzrtATeg95EmS2vkGoXuZ5UWeP5"
    },
    {
      "name": "Sawed-Off | Highwayman",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2veZt-IeeWCmiWx9F0vOBqRC68mRkYvzSCkpu3dXuVaQchCMRwQeJYsxaxl9W0N-nrtVeMid4XyHn53XtN5n5st-xRU71lpPM2tqJ-2A"
    },
    {
      "name": "XM1014 | Tranquility",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7OeRcKk8cKHHMWSR0-disfJWQyC0nQlp5zjWnNigIC-falMlWMN2F-cP5Ba-xoXlMri0swTZg41EyX34jS1LuDErvbgNI5zBZg"
    },
    {
      "name": "MP9 | Dart",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6dlJeaBAWmvzedxuPUnH3_lkRgmtmrVmNn6dC_COFUlWJZwF-df4xW8ktK2N-234QfX2IlMzjK-0H1cH54WRg"
    },
    {
      "name": "MAG-7 | Firestarter",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wjFL0P-vb_NSJvmBC2WZ1fpzvt5lRi67gVNyt27dz46scn2TaQ52XpV1E-8I4RLuwIHnMO2w4gfa2NlHmy2ri3xP8G81tFM5kI47"
    },
    {
      "name": "Five-SeveN | Urban Hazard",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j_R7TSi9qhUmqTyXnrD1KCzPKhhzXpBwFu9YtxK6k4buYenrtgDWj4NGyX3-2yhBun1qt-YBBKsg_aXWkUifZnLiQ4dl"
    },
    {
      "name": "UMP-45 | Delusion",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkk4a0qB1I_827ZbQ5dc-XQ3GZ0ud5vvJWQyC0nQlp5z7RwtyrIC6WbAYgCJp3Q-YD4RXsxN3jN-7n41He390QzXn5iCMf5jErvbiLTzB_rQ"
    },
    {
      "name": "G3SG1 | Murky",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1a4s2pO7dqcc-eG3Wb2NF6ueZhW2e2wE5y6juDy46uJ3qePVR1C5BzR7UO4xa9ldXlYuK07wSP2dlMzin6kGoXucw3wj8l"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "operation_wildfire_case": [
    {
      "name": "AK-47 | Fuel Injector",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSM-WDC3WTye9kt-RtcCW6khUz_WuGy9_8dHuRbg5xW5IjQ-BYshK9mta0NLmw4lDa2o0Wni_3iy4f6np1o7FVB0pWHHg"
    },
    {
      "name": "M4A4 | The Battlestar",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSMPmcAGKV09F6ueZhW2fjxB9_4GqEyN6vdi_BPwQgWZIkRLYD4Ba_kILgYeOz4lbagthBz3_9kGoXuZIYHoDp"
    },
    {
      "name": "Desert Eagle | Kumicho Dragon",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7uORbKF-JeKHC2aXzetJu_RkRiq7mhk1sjqKlLD1KCzPKhh0CcBwQLVe5BHrloKyZOnr5w3XiYhDnC39iCpK7X1psrlUWaFw8qXekUifZlV_fDVZ"
    },
    {
      "name": "Nova | Hyper Beast",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSKOmDC3WSxO9lpN5lRi67gVMhsGrTmd2seH6XbA4pDZR1EbMCtES8m4fiNenl4FDcid1Az32ri3tM8G81tMCTwFwB"
    },
    {
      "name": "AWP | Elite Build",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6lsM-SWHH6vzedxuPUnSnHmk0Qh4G6HmN-scXmSaQRxXJpwRuZYsxTqxtTnM7nl4gTW2dlFyjK-0H0d8XeEBg"
    },
    {
      "name": "FAMAS | Valence",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1a_s2oaalsM8-QAWmEzvtkj-1gSCGn2x4ksWzczo39c3_Ga1R1CpByR-YO4RXqm9fgP76w4lbYi91CzSyq2H5XrnE8rQqckvg"
    },
    {
      "name": "Glock-18 | Royal Legion",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK6HLMWaHwPxyj-1gSCGn20gksm_Uyo7_JSmeOARyXsEhFLQMsUW_wIXuP-rj71CIiotAzCqoinhXrnE8DvG09t0"
    },
    {
      "name": "MAG-7 | Praetorian",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiVI0P-vb_NSMOKSC3Of0-d3vt5lRi67gVMl5j_VzIr_eSnBbw4iXsR2FLZfsRi6x9LvNOqw4FePid4UmCX2iC1J8G81tOf1qE-m"
    },
    {
      "name": "MP7 | Impire",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf7jJk4uL5V61gMPmBC1icyOl-pK8xGiq2kUV24j6Gn9b4eXmWPwIoApJxRbRbtRW5wdfjYbi0sVfW2tkQ02yg2fafAb5i"
    },
    {
      "name": "Five-SeveN | Triumvirate",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRa7FSJvmFC3SV1-t4j-B8SCS2mwkitwKJk4jxNWWXPAZzD5pwTeBetUPtw4C1N7jh5A3bj48RxSyqiiwc7Sg6tr0ABaAk5OSJ2O3yTJMF"
    },
    {
      "name": "USP-S | Lead Conduit",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSJ-OsG3SA_vh5vPVoSCyMmRQguynLmNyrdimTZw4mW8cmE-ZYsxewkYaxZb6z5FbfjY8RyS__iXsc6S09sfFCD_RkYnnFtg"
    },
    {
      "name": "SSG 08 | Necropos",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-dC2SCzv55o95lRi67gVN26m_VnomsdiqTZwB0W5R5E7UCuxe6lICyMO3i7lDWjt4XyHj_iypB8G81tA-y21Aw"
    },
    {
      "name": "Dual Berettas | Cartel",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1a_s2qfaVhIvWBC3OEwP1Js-B7Wyy_qhEutDWR1I38I3yROgAmDZIjFuEJ50S6lNLvMuKx5lPbj9gRySz92HhKuiZp5ekcEf1yPnX3Fyc"
    },
    {
      "name": "MAC-10 | Lapis Gator",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1a4s2jaac8cM-WAmKT1fx_s-h9Vha_nBovp3ODztegd3LEawcnX5ByFLQPtxSxldyxPrjg5QCPj94Ty3j8j3tLu30__a9cBu41m2up"
    },
    {
      "name": "PP-Bizon | Photic Zone",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-QB3OZ2-t4j-1gSCGn20hw5GXWntf_eH-Wa1MgX5N2EeBc50G_w9HuZL_h4gGLjd8XxX37iHtXrnE8eXv1H4U"
    },
    {
      "name": "Tec-9 | Jambiya",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SKvGeDG6JwNF6ueZhW2ewwhhw5WnXy4v_dnqXOwMnAsQmF-IMtxDql9LmP-mw51feiIhDnn78kGoXuTq6iJ_X"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "shadow_case": [
    {
      "name": "M4A1-S | Golden Coil",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9lj_JnTiK2lxQztgKClYP9HifOOV5kFJclQ-Jb5xW-m9CxPuLq4QTfjd0XzyX6jCpL6X5o5OgDVfYn_a2Ci1rfcepqgV49FrE"
    },
    {
      "name": "USP-S | Kill Confirmed",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uV_vO1WTCa9kxQ1vjiBpYPwJiPTcFB2Xpp5TO5cskG9lYCxZu_jsVCL3o4Xnij23ClO5ik9tegFA_It8qHJz1aWe-uc160"
    },
    {
      "name": "AK-47 | Frontside Misty",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSN_mdGmKC_v1mv_N9cCW6khUz_WvRm9r8JS-SaFMmWcN5ReMD4BDsltDkN-Prs1DfjN9Cn3r_jC4YvHl1o7FVgJsyBlQ"
    },
    {
      "name": "SSG 08 | Big Iron",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-HC2SYz-d1se1gWzCMmRQguynLyYqqJSqQbAIiDMclTbYDtUKwlIfvP7jr4Fbcj4xGzir6jilJ6ils4PFCD_SOjD5UKQ"
    },
    {
      "name": "G3SG1 | Flux",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1c_M2pO7dqcc-VAnKI_v5jovFlSha_nBovp3ODz9uoc3vGOgMmApp3QrFe5xftm9bjNOm24Afb3YlBn3mqjS8dvy1p_a9cBmtTF-_C"
    },
    {
      "name": "Galil AR | Stone Cold",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PW9V6NsLPmfMWmZxuZip-hnSBa_nBovp3PSnI2heXqXOwQjDpcmQ-UN5BjrmtexP-rgswDajotBxCz5iyhMui5u_a9cBuYTcBV8"
    },
    {
      "name": "M249 | Nebula Crusader",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiVI0P_8PP1SLvWRG2uR_u1kpfJoSyyhqhEutDWR1Ir_JSiXOgciDJN4RucCsRW8w4KyZu_q5FeLjN4RnCmt33lP7nxv5-wcEf1yLX15hXE"
    },
    {
      "name": "P250 | Wingshot",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwipC0OL8PfRSI-KSDWyDyeFij-1gSCGn205wtT7Xn4yuc3qQbQUkXJQmEeQCtkK7wdDgZO7n71Df2IkQxH7-hyhXrnE8AH9Qqg8"
    },
    {
      "name": "MP7 | Special Delivery",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V6dhIeOAB2GZxOpJvOhuRz39xRhytjuBm9n4d3yXbQF1XJAhQLID4BTskobhZb-35wXZ2toTySz2jTQJsHhDRFQUDw"
    },
    {
      "name": "Glock-18 | Wraiths",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c_M2pZKtuK6HLMXCCwPp-qfJWQyC0nQlp4T_Xnoz8dCmfZlUgXsd5RbMC40WxkdXnP7nl4wHXi9oUyH_9jilIuzErvbjBKaM58A"
    },
    {
      "name": "FAMAS | Survivor Z",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-fC2mEwNF6ueZhW2exlE8hsTzcw4n4JC7BOAQpCscmRrRe5xW7w9TgNu7itAHWiYpAziqokGoXuXR1eqm1"
    },
    {
      "name": "Dual Berettas | Dualing Dragons",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2qfaVhIvWBHGKE1e9JtPNoSCa9hiIrujqNjsGqcn-VZ1JyXMR3RuMK5xDswNXkYbjitgePj91Bynn32y5N7ydtsLoET-N7rXzpOmeh"
    },
    {
      "name": "MAG-7 | Cobalt Core",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5G3wiFO0P-vb_NSLemBDWKexNF6ueZhW2fkwBshsT-DntuscSiVbABzD5Z2QuRftRXuwYblY-_i5AePj49Emyn7kGoXuSUXTp8T"
    },
    {
      "name": "XM1014 | Scumbria",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLpk8ewrHZk7uORcKk8cKHHMXST1ON0ouhocCW6khUz_WWEnNyvcymfalB0DZd4FOEDtBnrl9LiN-3i7gPWj9hBxCusiClP6iZ1o7FVjZ8JfoU"
    },
    {
      "name": "MAC-10 | Rangeen",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1Y-s2jaac8cM-SAmKbyfd3j-V8QBa_nBovp3PWztqtJXqWPVdzX8d3EbUDtkS_w9bmYui04gbYiolGnH_833xM6C5o_a9cBlensHEx"
    },
    {
      "name": "SCAR-20 | Green Marine",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk6OGRe6dsMqLDMXeVwO1zveBiSjvjxiIrujqNjsH6IymVbQEmCZoiQ-MC5kbrwN3kPuy24lDa2YsQmy2t2iof7Hs56uxQT-N7rTkENKOY"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "shattered_web_case": [
    {
      "name": "AWP | Containment Breach",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7JkMuWAMWuZxuZi_rQ6SXq1xURysj_Vw4uhJHOVPQ8oCZt4QrRbtRi6ldPlPu_g4FHaiYNbjXKpcPI_17A"
    },
    {
      "name": "MAC-10 | Stalker",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8n5WxrR1c_M2jaac8cM-AGmacyutkj-1gSCGn20V0t27Tw974Jy-WOg9yW8N3QOQDsxG4x9O0ZOPqtgHZ399HzST8ji9XrnE8CxAHwFY"
    },
    {
      "name": "SSG 08 | Bloodshot",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLijZGwpR1Y-s29e6M9eM-HB2Sbzetkj-1gSCGn201wsjnUm9qrI3OXaAQnDsZwTbIDtxnpl9W0P7i35FfW3toTzC6q2ixXrnE8w4eIHZQ"
    },
    {
      "name": "SG 553 | Colony IV",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-BC2aT1eFkj-1gSCGn20Qit2yAn9n8IHKealB2DZIjTO8JsBW7ktDlYu_m5ADWit4Rznn63XtXrnE82sW2soE"
    },
    {
      "name": "Tec-9 | Decimator",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wiVI0Oara_1SJPWQB2qR1eFkj-1gSCGn20h16j-Ew9j6Jy6QbQB1XJJzQLVYshXqm92xY-7g4wze3dpAySz2iXlXrnE8_HmWmcE"
    },
    {
      "name": "AK-47 | Rat Rod",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSLvmRDGuV09F6ueZhW2fklBx362TTnN36dHiRa1AmW5QlQuVftxO9k4HhZuvksVDc398Rzy32kGoXuR34FNLu"
    },
    {
      "name": "AUG | Arctic Wolf",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwi5Hf_jdk7uepV7NlKeSWCGaextF6ueZhW2frxxtxsGrTw46sI33BOAUiXMElFO4L50O9xNLvNOyz4lDd3olMzX6skGoXude_sLiC"
    },
    {
      "name": "MP7 | Neon Ply",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V7ZoMPyaDWavzedxuPUnGS2wzBglsm6AnNyqJHLBOAdyCZV0ELIN5xC6kNThY-jqslbbid4WyjK-0H0WWbSZ_g"
    },
    {
      "name": "P2000 | Obsidian",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL5lYayrXIL0PG7V7Q_cKDDMWiS0udyueBncCW6khUz_W7QzNf4eHKUPA9xDMAkFrMJ40brldGxM-rk4lfago1MzXmrjCwYvC91o7FVDbVY3kE"
    },
    {
      "name": "PP-Bizon | Embargo",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1Y-s2sYb5iLs-BAWaU_vl3ovNgQDuMmRQguynLnt37I3ifb1VyW8F4Te8D4UTrl4GxZru25FTZjI9GnCr5iC4YvSto4PFCD_TYHp-YNQ"
    },
    {
      "name": "Dual Berettas | Balance",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1c_M2qfaVhH_WfB3OV0tFkv_JscCW6khUz_W2Dyon_dimePA8lWJclQrMJthm-kYW2NbzrtQ3eioJCnyWo33wa7Hl1o7FV2r7YJY0"
    },
    {
      "name": "MP5-SD | Acid Wash",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsPz-R1c_M2jePFSJeSQBlicyOl-pK9rTnjqlkkitmTVn437IiiePQRyX8F4FuBc5xS_lYHgZevj7wzagosX02yg2cdA74dF"
    },
    {
      "name": "Nova | Plume",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0PyhfqVSJvWSGm-V0_1hue9ucCW6khUz_Tndmd6tdHKQbAMnCZAmQrVYtRW9moayNerq5FTdioJMmST7j35L7Sp1o7FVL01CQxQ"
    },
    {
      "name": "SCAR-20 | Torn",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLinZfyr3Jk_OKRe6dsMqLDMXSE0-d9tfNWSzyggSIrujqNjsH6eHiSOwZ0XsdxFrEIthfpx9W0Yuux4QDe34pFni-s3SpK7Hs6570KT-N7re2tWema"
    },
    {
      "name": "G3SG1 | Black Sand",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2zYXnrB1Y-s2pO7dqcc-RAmaTyv13vuVWQyC0nQlp4miGytahcSiTZ1J0DZZ1ELYDskO7mtfjMujn5gbajYlGyS38jywY6jErvbjKP5Wfiw"
    },
    {
      "name": "R8 Revolver | Memento",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLjm4Dv8TRe_c2pe5t_eM-eC2qVz_p5j-1gSCGn20wk4D7Vz9_9JHyeawMnXpByReMDshfuxIDnPunj5gCN2ohFyST_2C1XrnE8s2YJKK4"
    },
    {
      "name": "M249 | Warbird",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiVI0P_8PP1SN_GBDG6CxdFgtfVsXSi9qhEutDWR1NqpdymUbgcgDcRwEeUO5xa7kIGzMOjgsQzejNoRni6ohyJL6ytv4-4cEf1yirMa72w"
    },
    {
      "name": "CZ75-Auto | Distressed",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLyhMG1_B1Y-s2tcvM4H_OWHGabzvpzj-1gSCGn208hsTyHw9z6eS2faQEoX5p1ELECtBi7xtG2Pr7j5APZjopDynj_iHtXrnE8XiCan1o"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ],
  "winter_offensive_weapon_case": [
    {
      "name": "M4A4 | Asiimov",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6V6V-Kf2cGFidxOp_pewnTii3w0x_tmTRnt2qdHyWaFAjA5UlQOYI5BO5k9bhZunm41OI34NDnjK-0H3pAWw_Rw"
    },
    {
      "name": "Sawed-Off | The Kraken",
      "rarity": "covert",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLin4Hl-S1d6c2tfZt-IeeWCmiWx9F5s_VmXzy-hSIrujqNjsH_eXmWaVRyXpF3EOZe5Bm8w93gMbzn4waPg98Tzir8jHwbuC5p4uZUT-N7rZ8ILI16"
    },
    {
      "name": "AWP | Redline",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6diIuKSMWuZxuZi_rUxHS3lzUwm5DjWy976dSiRagd1WJB1RLQP4RK-mtazM-3itQeL2INbjXKpw2eVIZ0"
    },
    {
      "name": "M4A1-S | Guardian",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL87o95sQyy0lBMzjDGMnYftb3-QPFUlWZJ1F7VbsBi7xoa0Y7vl5ACP2ohEzX-t2iJA7Xtv4ugKWaQ7uvqAAzqYQbE"
    },
    {
      "name": "P250 | Mehndi",
      "rarity": "classified",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwiFO0OL8PfRSMvWVB2mVxdF6ueZhW2eykERysj-GnNv7eHuTbAYjCpN4Q-ILsxGxw4DjM-rn5QTciIIRn36rkGoXuU7_dDjp"
    },
    {
      "name": "MP9 | Rose Iron",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_C9k-_qheqp0H-KcHWKvzP4vj-1gSCGn20h0423Wn9qoJH6QOwNxXpRxQOQLtEHumtTvP-i05wyMjN5Hz3qtiy1XrnE8Sl7QOgI"
    },
    {
      "name": "FAMAS | Pulse",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1Y-s2oaalsM8-DG2uDxNF6ueZhW2flxBlxtm_WntqhJyiSbw90CpJyR-8DtRm6kdHkYuLj4QzY2INCzX-skGoXudLVHKnn"
    },
    {
      "name": "Dual Berettas | Marina",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1T9s2jabZkLvGsHXKe0-dltd5lRi67gVN34DuDyoytIH3EPwYnDMYjROde4RC9lIDnZO_i51TejdoRxSWrhn9B8G81tGB0zZHS"
    },
    {
      "name": "Nova | Rising Skull",
      "rarity": "restricted",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL_kYDhwiFO0OGlfahhH_6cGGavzedxuPUnSSy3wEV-4miHyt__eHKSOA4pA5JxE7UJ5kO9l4HmZuixtgHZgoMTyDK-0H1FVu2S0A"
    },
    {
      "name": "Five-SeveN | Kami",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3l4Dl7idN6vyRYL1SK_GeB1icyOl-pK9oGnHnk012sT_XzNv4eXuUawUlDpEkQOIN40XskIHmP-mx4wOLio1B02yg2SJzf1Vk"
    },
    {
      "name": "Galil AR | Sandstorm",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0PG7V7dsLvSAGmiCzNF6ueZhW2exkx4m6mrcmd6heS-XZgB1ApZ3FLUI5xm6ktezMuzh7gTeiYpFnCr-kGoXuTw2UKiI"
    },
    {
      "name": "M249 | Magma",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8zMK5wiNK0P2se61pKfGdMWuZxuZi_rNrTC-wl0gh5WXXmIqpIyiSbVIoXJckEO9eukTrx4XkMbjh51bYjIJbjXKp9iAER2c"
    },
    {
      "name": "PP-Bizon | Cobalt Halftone",
      "rarity": "milspec",
      "image": "https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzl4zv8x1a4s26fbZ8L_mAC1iYwOJwpO5nSha_nBovp3PTnN79IH-fZw5xW5V4RrJYtRHpmtzkM-K04laIidlDz376jHhB5ixj_a9cBqXoycG_"
    },
    {
      "name": "★ Rare Special Item ★",
      "rarity": "ancient"
    }
  ]
};

const defaultRareIcon = "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/default_rare_item_png.png";
const rareItemsList = [];

const knifeTypes = [
  "Karambit", "Butterfly Knife", "M9 Bayonet", "Bayonet", "Flip Knife", 
  "Gut Knife", "Huntsman Knife", "Falchion Knife", "Shadow Daggers", 
  "Bowie Knife", "Ursus Knife", "Navaja Knife", "Stiletto Knife", 
  "Talon Knife", "Classic Knife", "Skeleton Knife", "Nomad Knife", 
  "Survival Knife", "Paracord Knife", "Kukri Knife"
];

const knifeFinishes = [
  "Fade", "Slaughter", "Crimson Web", "Case Hardened", "Blue Steel", "Night", 
  "Night Stripe", "Stained", "Scorched", "Safari Mesh", "Boreal Forest", 
  "Urban Masked", "Forest DDPAT", "Marble Fade", "Tiger Tooth", "Doppler", 
  "Gamma Doppler", "Lore", "Autotronic", "Black Laminate", "Freehand", 
  "Bright Water", "Damascus Steel", "Rust Coat", "Ultraviolet"
];

knifeTypes.forEach(knife => {
 
  rareItemsList.push({ name: `★ ${knife}`, rarity: 'ancient', image: defaultRareIcon });

  knifeFinishes.forEach(finish => {
    rareItemsList.push({ name: `★ ${knife} | ${finish}`, rarity: 'ancient', image: defaultRareIcon });
  });
});

const gloves = [
  "★ Sport Gloves | Pandora's Box", "★ Sport Gloves | Vice", "★ Sport Gloves | Superconductor", "★ Sport Gloves | Hedge Maze", "★ Sport Gloves | Amphibious", "★ Sport Gloves | Slingshot", "★ Sport Gloves | Omega", "★ Sport Gloves | Arid", "★ Sport Gloves | Big Game", "★ Sport Gloves | Nocts", "★ Sport Gloves | Scarlet Shamagh", "★ Sport Gloves | Bronze Morph",
  "★ Specialist Gloves | Crimson Kimono", "★ Specialist Gloves | Emerald Web", "★ Specialist Gloves | Fade", "★ Specialist Gloves | Foundation", "★ Specialist Gloves | Crimson Web", "★ Specialist Gloves | Field Agent", "★ Specialist Gloves | Tiger Strike", "★ Specialist Gloves | Marble Fade", "★ Specialist Gloves | Lt. Commander", "★ Specialist Gloves | Forest DDPAT", "★ Specialist Gloves | Mogul", "★ Specialist Gloves | Buckshot",
  "★ Moto Gloves | Spearmint", "★ Moto Gloves | POW!", "★ Moto Gloves | Cool Mint", "★ Moto Gloves | Eclipse", "★ Moto Gloves | Polygon", "★ Moto Gloves | Blood Pressure", "★ Moto Gloves | Smoke Out", "★ Moto Gloves | Finish Line", "★ Moto Gloves | 3rd Commando Company", "★ Moto Gloves | Transport", "★ Moto Gloves | Turtle", "★ Moto Gloves | Boom!",
  "★ Driver Gloves | King Snake", "★ Driver Gloves | Imperial Plaid", "★ Driver Gloves | Crimson Weave", "★ Driver Gloves | Snow Leopard", "★ Driver Gloves | Black Tie", "★ Driver Gloves | Rezan the Red", "★ Driver Gloves | Lunar Weave", "★ Driver Gloves | Diamondback", "★ Driver Gloves | Overtake", "★ Driver Gloves | Racing Green", "★ Driver Gloves | Convoy", "★ Driver Gloves | Queen Jaguar",
  "★ Hand Wraps | Cobalt Skulls", "★ Hand Wraps | Overprint", "★ Hand Wraps | Slaughter", "★ Hand Wraps | Badlands", "★ Hand Wraps | Leather", "★ Hand Wraps | Spruce DDPAT", "★ Hand Wraps | Arboreal", "★ Hand Wraps | Duct Tape", "★ Hand Wraps | Giraffe", "★ Hand Wraps | Constrictor", "★ Hand Wraps | Desert Shamagh", "★ Hand Wraps | Caution!",
  "★ Bloodhound Gloves | Charred", "★ Bloodhound Gloves | Snakebite", "★ Bloodhound Gloves | Bronzed", "★ Bloodhound Gloves | Guerrilla",
  "★ Hydra Gloves | Case Hardened", "★ Hydra Gloves | Emerald", "★ Hydra Gloves | Rattler", "★ Hydra Gloves | Mangrove",
  "★ Broken Fang Gloves | Yellow-banded", "★ Broken Fang Gloves | Unhinged", "★ Broken Fang Gloves | Needle Point", "★ Broken Fang Gloves | Jade"
];

gloves.forEach(glove => {
  rareItemsList.push({ name: glove, rarity: 'ancient', image: defaultRareIcon });
});

CASE_DB['special_items'] = rareItemsList;

for (const caseKey in CASE_DB) {
  const rareItem = CASE_DB[caseKey].find(item => item.name === '★ Rare Special Item ★');
  
  if (rareItem && !rareItem.image) {
    rareItem.image = defaultRareIcon;
  }
}

if (typeof module !== 'undefined') {
  module.exports = CASE_DB;
}