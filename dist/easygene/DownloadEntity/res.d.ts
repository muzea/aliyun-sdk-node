export interface DownloadEntityResponse {
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
     * 下载的表格文件URL
     * @example `https://my-bucket.oss.aliyucs.com/entity.csv`
     */
    EntityCSVFile: string;
}
