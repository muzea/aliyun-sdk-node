export interface AssociateResponse {
    /**
     * 请求ID
     * @example `5C20F0D4-9721-178A-8236-3BF990634962`
     */
    RequestId: string;
    /**
     * 联想的列表
     */
    Associate: {
        /**
         * 附带信息
         * @example `{}`
         */
        Meta: string;
        /**
         * 关联问题的标题
         * @example `公积金提取的政策`
         */
        Title: string;
    }[];
    /**
     * 本次会话的ID
     * @example `1531ded6b3df4afca4be63943f708bb7`
     */
    SessionId: string;
    /**
     * 本条会话应答消息的ID
     * @example `5ADF0EBD-7C50-1922-A28B-43215B47CC1A`
     */
    MessageId: string;
}
