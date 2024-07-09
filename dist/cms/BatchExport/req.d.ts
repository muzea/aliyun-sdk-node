export interface BatchExportRequest {
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
     * - 当您初次调用本接口时，必须先调用Cursor接口，获取`Cursor`的值。更多信息，请参见[Cursor](~~2330730~~)。
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
     * 用于定制返回数据的测量值。默认返回全部测量值。
     * 例如：云产品`acs_ecs_dashboard`的监控指标`cpu_idle`下有三个测量值的列，分别是`Average`、`Maximum`或`Minimum`，如果只需要返回`Average`和`Maximum`两列，则该参数设置为`["Average", "Maximum"]`数组即可。
     * 关于如何获取云产品的监控指标的测量值，请参见[云产品监控项](~~163515~~)的`statistics`列。
     */
    "Measurements"?: string[];
}
