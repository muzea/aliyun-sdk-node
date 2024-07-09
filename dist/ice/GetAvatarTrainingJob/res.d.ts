export interface GetAvatarTrainingJobResponse {
    /**
     * 请求 ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 调用成功时返回的数据
     */
    Data: {
        /**
         * 数字人训练任务
         */
        AvatarTrainingJob: {
            /**
             * 数字人任务 ID
             * @example `****55d86f7f4587943ce7734d6b****`
             */
            JobId: string;
            /**
             * 数字人 ID
             * @example `Avatar-XXXX`
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
             * - 数字人训练任务状态
             * - 取值范围：Init（初始化、草稿）、Queuing（排队中）、Training（训练中）、Success（训练成功）、Fail（训练失败）
             * @example `Success
            `
             */
            Status: string;
            /**
             * 状态描述信息
             * @example `训练成功`
             */
            Message: string;
            /**
             * 缩略图 URL
             * @example `https://your-bucket.oss-cn-hangzhou.aliyuncs.com/thumbnail.png`
             */
            Thumbnail: string;
            /**
             * 头像图片媒资 ID
             * @example `****571c704445f9a0ee011406c2****`
             */
            Portrait: string;
            /**
             * 训练视频媒资 ID
             * @example `****571c704445f9a0ee011406c2****`
             */
            Video: string;
            /**
             * 用于标识传入的视频是否支持透明通道
             * @example `true`
             */
            Transparent: boolean;
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
        };
    };
    /**
     * 请求是否调用成功
     * @example `true`
     */
    Success: boolean;
}
