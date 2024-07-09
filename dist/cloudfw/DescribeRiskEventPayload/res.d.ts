export interface DescribeRiskEventPayloadResponse {
    /**
     * 入侵防御事件的目的IP。
     * @example `203.0.113.1`
     */
    DstIP: string;
    /**
     * 入侵防御事件的目的Port。
     * @example `8080`
     */
    DstPort: number;
    /**
     * 入侵防御事件的攻击Payload。
     * @example `302902010004067075626c6963a01c0204036a5f43020100020100300e300c06082b060102010101000500`
     */
    Payload: string;
    /**
     * 入侵防御事件的源VPC ID。
     * @example `vpc-t4nlt09olhpazpoeg****`
     */
    SrcVpcId: string;
    /**
     * 入侵防御事件的源端口。
     * @example `54360`
     */
    SrcPort: number;
    /**
     * 返回结果的请求ID。
     * @example `68055BA4-D8BD-5611-AC49-C651E619A12E`
     */
    RequestId: string;
    /**
     * 入侵防御事件的攻击Payload长度。
     * @example `457`
     */
    PayloadLen: number;
    /**
     * 入侵防御事件的目的VPC ID。
     * @example `vpc-bp10w5nb30r4jzfyc****`
     */
    DstVpcId: string;
    /**
     * 入侵防御事件的源IP。
     * @example `203.0.113.2`
     */
    SrcIP: string;
    /**
     * 入侵防御攻击事件的协议类型。取值：
     * - **TCP**
     * - **UDP**
     * @example `TCP`
     */
    Proto: string;
    /**
     * HTTP X-Forwarded-For字段。
     * @example `203.0.113.4`
     */
    XForwardFor: string;
    /**
     * HTTP X-Real-IP字段。
     * @example `203.0.113.3`
     */
    RealIp: string;
}
