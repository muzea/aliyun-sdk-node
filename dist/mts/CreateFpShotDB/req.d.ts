export interface CreateFpShotDBRequest {
    /**
     * DNA库名称。
     * @example `example name`
     */
    "Name": string;
    /**
     * DNA库模型ID。文本DNA Modelld为**11**，视频DNA ModelId为**12**，音频DNA ModelId为**13**，图片DNA ModelId为**14**。
     * @example `12`
     */
    "ModelId"?: number;
    /**
     * 指纹库配置。默认为空，做定制化配置。字符串类型，JSON格式。
     * @example `null`
     */
    "Config"?: string;
    /**
     * DNA库描述。
     * @example `这是一个文本DNA库`
     */
    "Description"?: string;
}
