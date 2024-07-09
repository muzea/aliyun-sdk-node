export interface GetAvatarResponse {
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
         * 数字人
         */
        Avatar: {
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
             * 用于标识当前数字人是否支持透明通道
             * @example `true`
             */
            Transparent: boolean;
            /**
             * 数字人形象的宽（单位：像素）
             * @example `1080`
             */
            Width: number;
            /**
             * 数字人形象的高（单位：像素）
             * @example `1920`
             */
            Height: number;
        };
    };
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
