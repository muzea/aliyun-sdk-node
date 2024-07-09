export interface SimpleQueryRequest {
    /**
     * 当文件总数大于设置的MaxResults时，用于翻页的token。
     * 从NextToken开始按字典序返回文件信息列表。
     * 第一次调用此接口时，设置为空。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==`
     */
    "NextToken"?: string;
    /**
     * - 不传Aggregations参数查询文件时，表示返回文件的最大个数，取值范围为0~100。
     * - 传Aggregations参数进行聚合统计时，表示返回分组的最大个数，取值范围为0~2000。
     * - 不设置此参数或者设置为0时，则默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称，获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 简单查询条件。请点击左侧链接查看详情。
     */
    "Query"?: any;
    /**
     * 排序字段列表。请参考[字段和操作符的支持列表](~~252856~~)。
     * > - 多个排序字段可使用半角逗号（,）分隔，例如：Size,Filename。
     * > - 最多可设置5个排序字段。
     * > - 排序字段顺序即为排序优先级顺序。
     * @example `Size,Filename`
     */
    "Sort"?: string;
    /**
     * 排序字段的排序方式。取值如下：
     * - asc：升序
     * - desc（默认）：降序
     * >- 多个排序方式可使用半角逗号（,）分隔，例如：asc,desc。
     * > - 排序方式不可多于排序字段，即参数Order的元素数量需小于等于参数Sort的元素数量。例如Sort取值为Size,Filename时，Order可取值为desc或asc。
     * > - 排序方式少于排序字段时，未排序的字段默认取值asc。例如Sort取值为Size,Filename，Order取值为asc时，Filename默认排序方式为asc，即升序排列。
     * @example `asc,desc`
     */
    "Order"?: string;
    /**
     * 聚合字段信息列表。
     * ><notice>当您使用聚合查询时，仅返回聚合结果，不再返回匹配到的元信息列表。></notice>
     */
    "Aggregations"?: {
        /**
         * 字段名称。关于支持的字段，请参见[字段和操作符的支持列表](~~252856~~)。
         * @example `Size`
         */
        Field: string;
        /**
         * 聚合字段的操作符。
         * @example `sum`
         */
        Operation: string;
    }[];
    /**
     * 仅返回特定字段的值，而不是全部已有的元信息字段。可用于降低返回的结构体大小。
     * 不填或留空则返回所有字段。
     */
    "WithFields"?: string[];
    /**
     * 是否返回命中记录总数
     * - true 不返回TotalHits字段
     * - false 返回TotalHits字段
     */
    "WithoutTotalHits"?: boolean;
}
