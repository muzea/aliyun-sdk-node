export interface PutCustomMetricRequest {
    /**
     * 监控数据列表。
     */
    "MetricList": {
        /**
         * 上报数值类型。N的取值范围：1~21。取值：
         * - 0：原始数据。
         * - 1：聚合数据。
         * >当上报聚合数据时，建议周期为60秒和300秒的数据均上报，否则无法正常查询跨度大于7天的监控数据。
         * @example `0`
         */
        Type: string;
        /**
         * 监控项名称。N的取值范围：1~21。详情请参见[云服务监控项](~~163515~~)。
         * @example `cpu_total`
         */
        MetricName: string;
        /**
         * 指标发生的时间。N的取值范围：1~21。支持以下两种类型：
         * - UTC时间。格式：YYYY-MM-DDThh:mm:ssZ，例如：20171012T132456.888+0800。
         * - Long型时间戳。例如：1508136760000。
         * @example `1508136760000`
         */
        Time: string;
        /**
         * 应用分组ID。N的取值范围：1~21。
         * > 如果监控项不属于任何应用分组， 则输入0。
         * @example `12345`
         */
        GroupId: string;
        /**
         * 指标值集合。N的取值范围：1~21。
         * >如果上报数值的类型为0，则上报的是原始值，云监控会按周期将原始值聚合为多个值，例如：最大、计数、求和等。
         * @example `{"value":10.5}`
         */
        Values: string;
        /**
         * 维度Map，用于查询指定资源的监控数据。N的取值范围：1~21。
         * 格式：key-value键值对形式的集合，常用的key-value集合为：`{"Key":"Value"}`。
         * Key和Value的长度为1~64个字符，超过64个字符时截取前64个。
         * Key和Value的取值可包含英文字母、数字、点号（.）、短划线（-）、下划线（_）、正斜线（/）和反斜线（\）。
         * >Dimensions传入时需要使用JSON字符串表示该Map对象，必须按顺序传入。
         * @example `{"sampleName1":"value1","sampleName2":"value2"}`
         */
        Dimensions: string;
        /**
         * 聚合周期。N的取值范围：1~21。单位：秒，取值：60或300。
         * >如果上报数值的类型为1，则需要设置该参数。
         * @example `60`
         */
        Period: string;
    }[];
}
