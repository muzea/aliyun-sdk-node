export interface RectVerticalRequest {
    /**
     * 子场景ID
     * @example `1234****`
     */
    "SubSceneId": string;
    /**
     * 矫正数据
     * @example `{"844946777965268992":[[0.42418407210144654,0.33625107620738004,0.42620819117478337,0.635753199572695],[0.5158627587152769,0.3071978991900134,0.5177513758740194,0.6312118011104786],[0.582693212445534,0.3733969265933281,0.5807612760319687,0.6139402811250833]]}`
     */
    "VerticalRect": string;
    /**
     * 是否开启门预测
     * @example `true`
     */
    "DetectDoor"?: boolean;
    /**
     * 需要预测的门的数量,DetectDoor为true时生效
     * @example `2`
     */
    "CountDetectDoor"?: number;
}
