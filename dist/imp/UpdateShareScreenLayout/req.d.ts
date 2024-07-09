export interface UpdateShareScreenLayoutRequest {
    /**
     * 应用唯一标识，由6位小写字母、数字组成。
     * @example `lq****cu`
     */
    "AppId": string;
    /**
     * 课堂唯一标识，由调用CreateClass返回。
     * @example `AE35****T95F`
     */
    "ClassId": string;
    /**
     * 是否开启叠加老师画面
     * @example `true`
     */
    "EnableOverlay": boolean;
    /**
     * 叠加画面X坐标，起点为左上角，归一化为1
     * @example `0.7576`
     */
    "OverlayX"?: number;
    /**
     * 叠加画面Y坐标，起点为左上角，归一化为1
     * @example `0.7576`
     */
    "OverlayY"?: number;
    /**
     * 叠加画面宽度，归一化为1
     * @example `0.2361`
     */
    "OverlayWidth"?: number;
    /**
     * 叠加画面高度，归一化为1
     * @example `0.2361`
     */
    "OverlayHeight"?: number;
}
