export interface GetInternetTupleResponse {
    /**
     * 请求ID。
     * @example `D5E98683-355B-5867-8D3D-A24755F6895B`
     */
    RequestId: string;
    /**
     * 公网流量详情排名列表。
     */
    Data: {
        /**
         * 数据毫秒时间戳。
         * @example `1684373600099`
         */
        BeginTime: string;
        /**
         * 流量方向。取值：
         *  - **in**：入云方向。
         * - **out**：出云方向。
         * @example `in`
         */
        Direction: string;
        /**
         * 阿里云端IP归属的实例ID。
         * @example `eip-sample*`
         */
        InstanceId: string;
        /**
         * 流量进入阿里云的接入点。
         * > 仅**InstanceId**为Anycast弹性公网IP时，该参数有效。
         * @example `cn-hongkong-pop`
         */
        AccessRegion: string;
        /**
         * 阿里云端IP。
         * @example `112.74.XX.XX`
         */
        CloudIp: string;
        /**
         * 阿里云端端口。
         * @example `443`
         */
        CloudPort: string;
        /**
         * 对端IP。
         * @example `122.112.XX.XX`
         */
        OtherIp: string;
        /**
         * 对端端口。
         * @example `40002`
         */
        OtherPort: string;
        /**
         * 协议号。
         * @example `6`
         */
        Protocol: string;
        /**
         * 阿里云端国家或地区。
         * @example `中国`
         */
        CloudCountry: string;
        /**
         * 阿里云端省份。
         * @example `江苏省`
         */
        CloudProvince: string;
        /**
         * 阿里云端城市。
         * @example `南京市`
         */
        CloudCity: string;
        /**
         * 阿里云端运营商。
         * @example `移动`
         */
        CloudIsp: string;
        /**
         * 阿里云侧IP归属的实例对应的产品Code。
         * @example `EIP`
         */
        CloudProduct: string;
        /**
         * 对端国家或地区。
         * @example `美国`
         */
        OtherCountry: string;
        /**
         * 对端省份。当**OtherCountry**为国外时，此值多数为空。
         * @example `得克萨斯州`
         */
        OtherProvince: string;
        /**
         * 对端城市。当**OtherCountry**为国外时，此值多数为空。
         * @example `奥斯汀`
         */
        OtherCity: string;
        /**
         * 对端运营商。
         * @example `amazon.com`
         */
        OtherIsp: string;
        /**
         * 对端IP归属的产品。如果非云上IP，则为空。
         * @example `ECS`
         */
        OtherProduct: string;
        /**
         * 往返时延RTT（Round Trip Time）。单位：us。
         * @example `10000`
         */
        Rtt: number;
        /**
         * 流量数(Byte)。
         * @example `88`
         */
        ByteCount: number;
        /**
         * 流量包数。
         * @example `66`
         */
        PacketCount: number;
        /**
         * 乱序包数。
         * @example `1`
         */
        OutOrderCount: number;
        /**
         * 入云方向流量数。单位：Byte。
         * @example `88`
         */
        InByteCount: number;
        /**
         * 出云方向流量数。单位：Byte。
         * @example `66`
         */
        OutByteCount: number;
        /**
         * 入云方向流量包数。
         * @example `33`
         */
        InPacketCount: number;
        /**
         * 出云方向流量包数。
         * @example `22`
         */
        OutPacketCount: number;
        /**
         * 入云方向乱序包数。
         * @example `2`
         */
        InOutOrderCount: number;
        /**
         * 出云方向乱序包数。
         * @example `1`
         */
        OutOutOrderCount: number;
        /**
         * 入云方向重传包数。
         * @example `0`
         */
        InRetranCount: number;
        /**
         * 出云方向重传包数。
         * @example `1`
         */
        OutRetranCount: number;
        /**
         * TCP报文的重传率。
         * @example `0.1`
         */
        RetransmitRate: number;
    }[];
}
