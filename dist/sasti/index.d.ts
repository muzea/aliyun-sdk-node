import { DescribeDomainReportRequest } from "./DescribeDomainReport/req";
import { DescribeDomainReportResponse } from "./DescribeDomainReport/res";
import { DescribeFileReportRequest } from "./DescribeFileReport/req";
import { DescribeFileReportResponse } from "./DescribeFileReport/res";
import { DescribeIpReportRequest } from "./DescribeIpReport/req";
import { DescribeIpReportResponse } from "./DescribeIpReport/res";

interface SASTI {
    /**
     * 获取域名威胁标签信息、威胁类型、Whois信息、数字证书、相关攻击团伙等信息
     */
    DescribeDomainReport(query: DescribeDomainReportRequest): Promise<DescribeDomainReportResponse>;
    /**
     * 获取文件静态扫描结果、动态沙箱运行结果
     */
    DescribeFileReport(query: DescribeFileReportRequest): Promise<DescribeFileReportResponse>;
    /**
     * 获取IP地址相关地理位置信息、域名解析信息、威胁类型、相关攻击团伙或安全事件信息
     */
    DescribeIpReport(query: DescribeIpReportRequest): Promise<DescribeIpReportResponse>;
}
export default SASTI;
