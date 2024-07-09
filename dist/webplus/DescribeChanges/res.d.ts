export interface DescribeChangesResponse {
    Changes: {
        /**
         * 变更信息列表
         */
        Change: {
            /**
             * 变更是否被暂停
             * @example `false`
             */
            ChangePaused: boolean;
            /**
             * 变更描述
             * @example `apply env we-5d39b8ba6786bd4b149*****`
             */
            ChangeDescription: string;
            /**
             * 变更完成时间
             * @example `1562664854330`
             */
            FinishTime: number;
            /**
             * 变更最后更新时间
             * @example `1562664854381`
             */
            UpdateTime: number;
            /**
             * 变更是否超时
             * @example `false`
             */
            ChangeTimedout: boolean;
            /**
             * 变更创建时间
             * @example `1562664852417`
             */
            CreateTime: number;
            /**
             * 变更消息
             * @example `changeMessage`
             */
            ChangeMessage: string;
            /**
             * 变更操作名称
             * @example `Apply`
             */
            ActionName: string;
            /**
             * 变更是否完成
             * @example `true`
             */
            ChangeFinished: boolean;
            /**
             * 变更创建者
             * @example `user1`
             */
            CreateUsername: string;
            /**
             * 变更ID
             * @example `wc-5d3a963d5802611c4dd*****`
             */
            ChangeId: string;
            /**
             * 变更是否被中止
             * @example `false`
             */
            ChangeAborted: boolean;
            /**
             * 变更是否成功
             * @example `true`
             */
            ChangeSucceed: boolean;
            /**
             * 变更所属环境ID
             * @example `we-5d245f7f1f773f090a0*****`
             */
            EnvId: string;
            /**
             * 变更名称
             * @example `apply.env`
             */
            ChangeName: string;
        }[];
    };
    /**
     * 查询结果总数
     * @example `4046`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `91AF2647-8A0B-47FE-8AD4-AE49AA79****`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 单个查询页面内结果数量
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询页面数量
     * @example `1`
     */
    PageNumber: number;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
