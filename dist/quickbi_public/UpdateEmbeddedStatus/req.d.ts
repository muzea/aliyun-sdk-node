export interface UpdateEmbeddedStatusRequest {
    /**
     * 作品ID。
     * - 支持批量修改，用半角逗号（,）分割。
     * @example `897ce25e-f993-4abd-af84-d13c5610****`
     */
    "WorksId": string;
    /**
     * 是否开通作品的嵌入功能。取值范围：
     * - true：开通嵌入
     * - false：关闭嵌入
     * @example `true`
     */
    "ThirdPartAuthFlag": boolean;
}
