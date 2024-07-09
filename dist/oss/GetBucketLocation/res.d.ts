export interface GetBucketLocationResponse {
    /**
     * Bucket所在的地域。<br>
     * 有效值：oss-cn-hangzhou、oss-cn-shanghai、oss-cn-qingdao、oss-cn-beijing、oss-cn-zhangjiakouoss-cn-hongkong、oss-cn-shenzhen、oss-us-west-1、oss-us-east-1、oss-ap-southeast-1等。
     * <br>有关Bucket所在地域与数据中心对应关系的更多信息，请参见[访问域名与数据中心。](~~31837~~)。
     * @example `oss-cn-hangzhou`
     */
    LocationConstraint: string;
}
