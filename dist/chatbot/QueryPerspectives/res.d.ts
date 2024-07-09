export interface QueryPerspectivesResponse {
    /**
     * 请求ID
     * @example `F285D735-D580-18A8-B97F-B2E72B00F101`
     */
    RequestId: string;
    /**
     * 视角列表
     */
    Perspectives: {
        /**
         * 数据状态：3：启用；1：未启用
         * @example `1`
         */
        Status: number;
        /**
         * 创建时间 UTC时间
         * @example `2022-04-12T06:30:17Z`
         */
        CreateTime: string;
        /**
         * 视角ID
         * @example `3001`
         */
        PerspectiveId: string;
        /**
         * 是否自定义
         * @example `true`
         */
        SelfDefine: boolean;
        /**
         * 视角名称
         * @example `移动端视角`
         */
        Name: string;
        /**
         * 视角编码（用于问答API）
         * @example `FZJBY3raWr`
         */
        PerspectiveCode: string;
        /**
         * 修改时间 UTC时间
         * @example `2022-04-29T03:38:54Z`
         */
        ModifyTime: string;
    }[];
}
