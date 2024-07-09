export interface ListAvatarTrainingJobsResponse {
    /**
     * 请求 ID
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
     */
    RequestId: string;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 数字人训练任务列表
         */
        AvatarTrainingJobList: {
            /**
             * 数字人训练任务 ID
             * @example `*****aded114489ea02e0addf93*****`
             */
            JobId: string;
            /**
             * 数字人 ID
             * @example `Avatar-XXX`
             */
            AvatarId: string;
            /**
             * 数字人名称
             * @example `小数`
             */
            AvatarName: string;
            /**
             * 数字人描述
             * @example `这是一个数字人，用于某某场景。`
             */
            AvatarDescription: string;
            /**
             * 数字人类型
             * @example `2DAvatar`
             */
            AvatarType: string;
            /**
             * 数字人训练任务状态
             * @example `Success`
             */
            Status: string;
            /**
             * 状态描述信息
             * @example `训练成功`
             */
            Message: string;
            /**
             * 头像图片媒资 ID
             * @example `*****aded114489ea02e0addf93*****`
             */
            Portrait: string;
            /**
             * - 首次发起训练时间
             * - 格式为 utc 时间
             * @example `2020-12-23T13:33:40Z`
             */
            FirstTrainingTime: string;
            /**
             * - 最近一次训练时间
             * - 格式为 utc 时间
             * @example `2020-12-23T13:33:40Z`
             */
            LastTrainingTime: string;
            /**
             * - 任务创建时间
             * - 格式为 utc 时间
             * @example `2020-12-23T13:33:40Z`
             */
            CreateTime: string;
        }[];
        /**
         * 总记录数
         * @example `3`
         */
        TotalCount: number;
    };
    /**
     * 请求是否成功，取值：
     * - true：成功
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
