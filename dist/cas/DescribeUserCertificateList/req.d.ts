interface DescribeUserCertificateListRequest {
    "RegionId"?: string;
    /**
    * 指定每页显示多少条记录。默认取值为50。
    * @example `50`
    */ "ShowSize": number;
    /**
    * 指定当前页码。默认取值为1。
    * @example `1`
    */ "CurrentPage": number;
    /**
    * 请求的来源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { DescribeUserCertificateListRequest };