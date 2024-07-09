export interface ListSharedTargetsResponse {
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cm****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `04677DCA-7C33-464B-8811-1B1DA3C3D197`
     */
    RequestId: string;
    /**
     * 资源使用者信息。
     */
    SharedTargets: {
        /**
         * 资源使用者ID或资源所有者ID。取值：
         * - 当`ResourceOwner`为`Self`时，该参数为资源使用者ID。
         * - 当`ResourceOwner`为`OtherAccounts`时，该参数为资源所有者ID。
         * @example `114240524784****`
         */
        TargetId: string;
        /**
         * 更新关联资源使用者的时间。
         * @example `2020-12-07T09:16:59.905Z`
         */
        UpdateTime: string;
        /**
         * 关联资源使用者的时间。
         * @example `2020-12-07T09:16:59.905Z`
         */
        CreateTime: string;
        /**
         * 共享单元ID。
         * @example `rs-6GRmdD3X****`
         */
        ResourceShareId: string;
        /**
         * 资源使用者是否为资源目录外账号。取值：
         * - true：资源目录外账号。
         * - false：资源目录内账号。
         * @example `false`
         */
        External: boolean;
        /**
         * 资源使用者属性。例如：资源共享的时间段。
         * > 仅当资源使用者为阿里云服务时返回该参数。
         * @example `{
            "timeRange":{
                "timeRangeType":"timeRange",
                "beginAtTime":"00:00",
                "timezone":"UTC+8",
                "endAtTime":"19:59"
            }
        }`
         */
        TargetProperty: string;
    }[];
}
