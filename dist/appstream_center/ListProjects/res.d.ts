export interface ListProjectsResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 每页的查询结果数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前展示的查询结果页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 状态码：
     * - `200`：成功。
     * - `400`：出错。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `There is a missing parameter.`
     */
    Message: string;
    /**
     * 请求成功与否，成功返回为true，失败为false。
     * @example `true`
     */
    Success: string;
    /**
     * 调用成功时，返回项目信息列表。
     */
    Data: {
        /**
         * 项目名称。
         * @example `notepad++***
        `
         */
        ProjectName: string;
        /**
         * 项目ID。
         * @example `p-065z4tu9ak07h****
        `
         */
        ProjectId: string;
        /**
         * 项目关联的内容ID。
         * @example `c-06vcpamarryyq****
        `
         */
        ContentId: string;
        /**
         * 项目关联的内容名称。
         * @example `notepad++***`
         */
        ContentName: string;
        /**
         * 项目对象状态。
         * @example `0`
         */
        ProjectState: string;
        /**
         * 项目的统一会话规格。
         * @example `appstreaming.general.basic`
         */
        SessionSpec: string;
        /**
         * 可用会话时长，剩余可用小时数。
         * @example `3174301`
         */
        AvailableHours: number;
        /**
         * 访问页面Id列表。
         */
        AccessPageId: number[];
        /**
         * 会话包时长最大值。
         * @example `1000`
         */
        MaxHours: number;
        /**
         * 最大会话数量。
         * @example `100`
         */
        MaxSessions: number;
        /**
         * 项目描述信息。
         * @example `xxx`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `1701141509000`
         */
        CreateTime: string;
        /**
         * 使用中的会话数量
         * @example `90`
         */
        InUseSessions: number;
    }[];
    /**
     * 查询结果的总数。
     * @example `6`
     */
    TotalCount: number;
}
