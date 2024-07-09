export interface BatchGetRequest {
    /**
     * 云产品的数据命名空间。
     * 关于如何获取云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
     * > 本参数必须与Cursor接口中的请求参数`Namespace`相同。
     * @example `acs_ecs_dashboard`
     */
    "Namespace": string;
    /**
     * 云产品的监控项名称。
     * 关于如何获取云产品的监控项名称，请参见[云产品监控项](~~163515~~)。
     * > 本参数必须与Cursor接口中的请求参数`Metric`相同。
     * @example `cpu_idle`
     */
    "Metric": string;
    /**
     * 循环调用本接口导出数据时，必须输入`Cursor`的值。`Cursor`值的获取方法如下：
     * - 当您初次调用本接口时，必须先调用Cursor接口，获取`Cursor`的值。更多信息，请参见[Cursor](~~391206~~)。
     * - 当您再次调用本接口时，可以从上次调用本接口的返回数据中获取`Cursor`的值。
     * @example `eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0MzIwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQ3NTY2MzYzMjY3NmI2ZjM5MzU2YjY4MzAzMTYyNzg3MTcwNjkzMTM3MjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2****`
     */
    "Cursor": string;
    /**
     * 每次最多返回的数据条数。
     * 取值范围：1~10000。
     * @example `1000`
     */
    "Length": number;
    /**
     * 监控数据的压缩类型。
     * 目前仅支持`normal`（不压缩）。
     * @example `normal`
     */
    "CompressionType"?: string;
    /**
     * 监控项统计方法的白名单。
     * - 如果不设置该参数，则表示返回监控项的所有统计方法的监控数据。
     * - 如果设置该参数，则表示仅返回白名单中统计方法的监控数据。
     * 关于如何获取监控项的统计方法，请参见[云产品监控项](~~163515~~)中的参数`Statistics`。
     * @example `Maximum`
     */
    "RecordKeyWhiteList"?: string;
}
