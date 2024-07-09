export interface DescribeImageListRequest {
    /**
     * 镜像ID。
     * @example `imgc-075cllfeuazh0****`
     */
    "ImageId"?: string;
    /**
     * 镜像类型。
     * @example `System`
     */
    "ImageType": string;
    /**
     * 镜像名称。
     * @example `安卓12系统镜像`
     */
    "ImageName"?: string;
    /**
     * 镜像的状态。
     * @example `AVAILABLE`
     */
    "Status"?: string;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
}
