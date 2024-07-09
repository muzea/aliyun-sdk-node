export interface CreateImageDbRequest {
    /**
     * 数据库名称。支持小写字母、数字、下划线的组合，长度2~64。
     * > 每个开通视觉搜索服务的阿里云账号默认只能新建一个数据库。
     * @example `default`
     */
    "Name": string;
}
