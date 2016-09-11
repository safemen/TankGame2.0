/**
 * �������ֹ��캯��
 * createTime 2016/9/10  19:00
 * createBy jh
 */

function Music(oAudio) {

    this.oAudio = oAudio;
    this.annex = null;//������
    this.attack = null;//����
    this.bomb0 = null;//��ը
    this.bomb1 = null;//��ը
    this.over = null;//��Ϸ����
    this.start = null;//��Ϸ��ʼ
}

/**
 * ��ʼ��
 */
Music.prototype.init = function () {
    this.createAudio();
};

/**
 * ��������Ԫ��
 */
Music.prototype.createAudio = function () {

    this.annex = this.createElem(AUDIO, MUSIC_ANNEX, MUSIC_ANNEX);
    this.annex.src = MUSIC_ANNEX_SRC;

    this.attack = this.createElem(AUDIO, MUSIC_ATTACK, MUSIC_ATTACK);
    this.attack.src = MUSIC_ATTACK_SRC;

    this.bomb0 = this.createElem(AUDIO, MUSIC_BOBM0, MUSIC_BOBM0);
    this.bomb0.src = MUSIC_BOBM0_SRC;

    this.bomb1 = this.createElem(AUDIO, MUSIC_BOMB1, MUSIC_BOMB1);
    this.bomb1.src = MUSIC_BOMB1_SRC;

    this.over = this.createElem(AUDIO, MUSIC_OVER, MUSIC_OVER);
    this.over.src = MUSIC_OVER_SRC;

    this.start = this.createElem(AUDIO, MUSIC_START, MUSIC_START);
    this.start.src = MUSIC_START_SRC;

    var oFrag = document.createDocumentFragment();

    oFrag.appendChild(this.annex);
    oFrag.appendChild(this.attack);
    oFrag.appendChild(this.bomb0);
    oFrag.appendChild(this.bomb1);
    oFrag.appendChild(this.over);
    oFrag.appendChild(this.start);

    this.oAudio.appendChild(oFrag);
}

/**
 * ����Ԫ�صķ���
 * @param sElem
 * @param sClass
 * @param sId
 */
Music.prototype.createElem = function (sElem, sClass, sId) {

    return Map.prototype.createElem.apply(this, arguments);
};

Music.prototype.playMusic = function (type) {
    switch (type) {
        case 0:
            this.start.play();
            break;
        case 1:
            this.attack.play();
            break;
        case 2:
            this.bomb0.play();
            break;
        case 3:
            this.bomb1.play();
            break;
        case 4:
            this.annex.play();
            break;
        case 5:
            this.over.play();
            break;
        default:
            break;
    }
}