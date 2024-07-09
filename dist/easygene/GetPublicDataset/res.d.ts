export interface GetPublicDatasetResponse {
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
     * 公共数据集描述
     * @example `西蒙斯基因组多样性计划 (Simons Genome Diversity Project, SGDP) 是目前世界上最大、质量最高的人群多样性基因组数据。`
     */
    DatasetDescription: string;
    /**
     * 公共数据集版权信息
     * @example `此数据集公开提供给所有人使用，但使用者需遵循数据集来源规定的条款 (Fort Lauderdale principles)`
     */
    Copyright: string;
    /**
     * 公共数据集访问要求
     * @example `阿里云“按原样”提供数据集，对此不作任何明示或暗示的保证。`
     */
    AccessRequirements: string;
    /**
     * 关于公共数据集
     * @example `全部数据集包括279个基因组，可以查看已发表的文章。 阿里云收录了项目说明文档中记录的完全公开的变异结果的VCF文件。`
     */
    About: string;
    /**
     * 公共数据集标签列表
     */
    Tags: string[];
    /**
     * 公共数据集名称
     * @example `西蒙斯基因组多样性计划`
     */
    DatasetName: string;
    /**
     * 公共数据集更新频率
     * @example `源站更新后及时同步`
     */
    UpdateFrequency: string;
    /**
     * 公共数据集可用区域
     */
    Locations: string[];
    /**
     * 最后更新时间
     * @example `yyyy/MM/dd HH:mm:ss`
     */
    LastModified: string;
}
