export interface DescribeImageBaselineDetailRequest {
    /**
     * 镜像UUID。
     * @example `06293273b67d19516cfcc712194f****`
     */
    "ImageUuid"?: string;
    /**
     * 基线数据信息。
     * @example `取值包括但不限于以下内容：ak_leak, duplicate_uid,duplicate_pwd_hash,non_pwd_user`
     */
    "BaselineItemKey"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
