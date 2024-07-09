export interface DescribePerspectiveResponse {
    /**
     * 请求ID
     * @example `F285D735-D580-18A8-B97F-B2E72B00F101`
     */
    RequestId: string;
    /**
     * 数据状态：3：启用；1：未启用
     * @example `1`
     */
    Status: number;
    /**
     * 视角编码（用于问答API）
     * @example `FZJBY3raWr`
     */
    PerspectiveCode: string;
    /**
     * 修改时间 UTC时间
     * @example `2021-07-26T07:05:37Z`
     */
    ModifyTime: string;
    /**
     * 是否自定义
     * @example `true`
     */
    SelfDefine: boolean;
    /**
     * 创建时间 UTC时间
     * @example `2021-07-27T07:05:37Z`
     */
    CreateTime: string;
    /**
     * 视角ID
     * @example `3001`
     */
    PerspectiveId: string;
    /**
     * 视角名称
     * @example `移动端视角`
     */
    Name: string;
}
