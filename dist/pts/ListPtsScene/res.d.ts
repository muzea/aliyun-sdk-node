export interface ListPtsSceneResponse {
    /**
     * 错误提示信息，若成功则不返回任何数据。
     * @example `创建或者修改场景入参必须是实体类scene的JSON串`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DD6F2ED8-E31B-497F-85AB-C4E358A5F667`
     */
    RequestId: string;
    /**
     * HTTP状态码，若成功则不返回任何数据。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 查询的场景列表信息。
     */
    SceneViewList: {
        /**
         * 场景创建时间。
         * @example `2021-02-26 15:28:39`
         */
        CreateTime: string;
        /**
         * 场景ID。
         * @example `DFGVS3S`
         */
        SceneId: string;
        /**
         * 场景名。
         * @example `测试下单线上`
         */
        SceneName: string;
        /**
         * PTS场景状态
         * @example `Draft：草稿
        WaitStart：待启动
        Debugging：调试中
        Running：运行中
        `
         */
        Status: string;
    }[];
    /**
     * 系统状态码，若成功则不返回任何数据。
     * @example `4001`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `false`
     */
    Success: boolean;
}
