export interface CreateAvatarTrainingJobRequest {
    /**
     * - 数字人名称
     * - 不多于 7 个字符
     * @example `小数`
     */
    "AvatarName": string;
    /**
     * - 数字人描述
     * - 不多于 1000 个字
     * @example `这是一个数字人，用于某某场景。`
     */
    "AvatarDescription"?: string;
    /**
     * 数字人类型
     * @example `2DAvatar`
     */
    "AvatarType"?: string;
    /**
     * - 缩略图 URL
     * - 训练成功后会将缩略图上传到这个地址中
     * - 必须是用户下合法的 OSS 公网 URL
     * - 不多于 512 个字符
     * @example `https://your-bucket.oss-cn-hangzhou.aliyuncs.com/thumbnail.png`
     */
    "Thumbnail"?: string;
    /**
     * - 头像图片的媒资 Id
     * - 长度为 32 个字符
     * @example `****571c704445f9a0ee011406c2****`
     */
    "Portrait"?: string;
    /**
     * - 训练视频媒资 ID
     * - 长度为 32 个字符
     * - 支持 mp4，mov，webm 格式
     * - 素材时长需在 5 分钟到 15 分钟内
     * - 素材分辨率需为 1920 * 1080 或 1080 * 1920
     * @example `****571c704445f9a0ee011406c2****`
     */
    "Video"?: string;
    /**
     * - 训练视频是否支持透明通道
     * ><notice>请严格确认当前设置与提交训练视频情况一致，否则合成数字人可能会异常></notice>
     * @example `True`
     */
    "Transparent"?: boolean;
}
