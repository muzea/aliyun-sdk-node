export interface ListPolicyAttachmentResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B4B379C2-9319-4C6B-B579-FE36831B09F4`
     */
    RequestId: string;
    /**
     * 防护关联关系列表。
     */
    AttachmentList: {
        /**
         * 防护对象的IP地址。
         * @example `147.139.183.***`
         */
        Ip: string;
        /**
         * 策略ID。
         * @example `1b43f44e-65e1-411a-b0c0-d6c1********`
         */
        PolicyId: string;
        /**
         * 策略名称。
         * @example `test**`
         */
        PolicyName: string;
        /**
         * 策略类型，取值
         * - **l3**：表示IP防护策略
         * - **l4**：表示端口防护策略
         * @example `l3`
         */
        PolicyType: string;
        /**
         * 防护对象的IP归属地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 防护对象的端口号。
         * @example `8*`
         */
        Port: number;
        /**
         * 防护对象的协议类型，取值：
         * - **tcp**：表示传输控制协议。
         * - **udp**：表示用户数据报协议。
         * @example `udp`
         */
        Protocol: string;
        /**
         * 防护对象的IP所属成员账号UID。
         * @example `177699790631****`
         */
        MemberUid: string;
    }[];
    /**
     * 防护关联关系总数量。
     * @example `28`
     */
    Total: number;
}
