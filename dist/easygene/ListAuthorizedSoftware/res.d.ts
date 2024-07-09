export interface ListAuthorizedSoftwareResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 翻页Token用来表示当前调用返回读取到的位置，空代表数据已经读取完毕
     * @example `ba6d88e2-a6f2-4d2c-a2ae-68b76b078445`
     */
    NextToken: string;
    /**
     * 分页数
     * @example `10`
     */
    MaxResults: number;
    /**
     * 总记录数
     * @example `100`
     */
    TotalCount: number;
    /**
     * 软件信息
     */
    Softwares: {
        /**
         * 软件名称
         * @example `sentieon`
         */
        SoftwareName: string;
        /**
         * 软件长名称
         * @example `Sentieon加速软件`
         */
        SoftwareLongName: string;
        /**
         * 软件描述
         * @example `NGS数据二级分析软件，提供基于CPU的加速方案，可替代BWA，GATK，HaplotypeCaller，Mutect和Mutect2等分析流程。包括DNASeq，DNAScope，TNScope等工具`
         */
        SoftwareDescription: string;
        /**
         * 软件默认版本
         * @example `201911`
         */
        SoftwareDefaultVersion: string;
        /**
         * 软件所有版本
         */
        SoftwareVersions: string[];
        /**
         * 软件使用费用
         * @example `0.15`
         */
        SoftwareLicenseFee: number;
        /**
         * 软件可用区域
         */
        Locations: string[];
        /**
         * 帮助链接
         * @example `https://help.aliyun.com/document_detail/257750.html`
         */
        HelpLink: string;
        /**
         * 软件图标链接
         * @example `https://img.alicdn.com/imgextra/i2/O1CN01mmZovA1UJfeKQAYvF_!!6000000002497-2-tps-256-256.png`
         */
        SoftwareIcon: string;
        /**
         * 最后更新时间
         * @example `yyyy/MM/dd HH:mm:ss`
         */
        LastModified: string;
        /**
         * 限时免费说明
         */
        Promotion: string;
    }[];
}
