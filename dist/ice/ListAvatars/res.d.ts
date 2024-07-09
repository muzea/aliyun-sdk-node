export interface ListAvatarsResponse {
    /**
     * 请求 ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 数字人列表
         */
        AvatarList: {
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
             * 当前数字人形象是否支持透明通道
             * @example `true`
             */
            Transparent: boolean;
        }[];
        /**
         * 总记录数
         * @example `1`
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
