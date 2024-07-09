export interface DescribeDialogueNodeStatisticsResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 分组ID。
     * @example `f06f7c9f-2895-4b30-a8c2-6ecccb9c9f89`
     */
    GroupId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 总计个数
     * @example `13`
     */
    TotalCompleted: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 实例id
     * @example `e5035654-1745-484a-8c5b-165f7c7bcd79`
     */
    InstanceId: string;
    /**
     * 无应答节点
     * @example `[]`
     */
    NoAnswerDialogueNodes: {
        /**
         * 无应答数量
         * @example `2`
         */
        NoAnswerNum: number;
        /**
         * 分组ID。
         * @example `f06f7c9f-2895-4b30-a8c2-6ecccb9c9f89`
         */
        GroupId: string;
        /**
         * 节点名称
         * @example `xxx`
         */
        NodeName: string;
        /**
         * 挂机数量
         * @example `2`
         */
        HangUpNum: number;
        /**
         * 实例ID。
         * @example `e5035654-1745-484a-8c5b-165f7c7bcd79`
         */
        InstanceId: string;
        /**
         * 命中数量
         * @example `12`
         */
        HitNum: number;
        /**
         * id
         * @example `123`
         */
        Id: string;
        /**
         * 节点id
         * @example `e5035654-1745-484a-8c5b-165f7c7bcd79`
         */
        NodeId: string;
    }[];
    HangUpDialogueNodes: {
        HangUpNum: number;
        NodeId: string;
        NodeName: string;
        RateDisplay: string;
    }[];
}
