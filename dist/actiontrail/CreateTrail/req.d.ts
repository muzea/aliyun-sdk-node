export interface CreateTrailRequest {
    /**
     * 创建的跟踪名称。
     * 长度为6～36个字符，必须以小写英文字母开头，可包含小写英文字母、数字、短划线（-）和下划线（_）。
     * >同一个账号内跟踪名称不可重复。
     * @example `trail-test`
     */
    "Name": string;
    /**
     * 跟踪投递的OSS存储空间。
     * 长度为3～63个字符，必须以小写英文字母或者数字开头，可包含小写英文字母、数字和短划线（-）。
     * > OssBucketName、SlsProjectArn、MaxComputeProjectArn需至少指定其中一个参数。
     * @example `audit-log`
     */
    "OssBucketName"?: string;
    /**
     * 跟踪投递的OSS存储空间文件名的前缀，可为空。
     * 长度为6～32个字符，必须以英文字母开头，可包含英文字母、数字、短划线（-）、正斜线（/）和下划线（_）。
     * @example `at-product-account-audit-B`
     */
    "OssKeyPrefix"?: string;
    /**
     * 操作审计向对象存储OSS存储空间投递操作事件时，扮演的角色ARN。
     * - 如果不指定该参数，操作审计会通过创建服务关联角色来创建相应的资源。更多信息，请参见[操作审计服务关联角色](~~169244~~)。
     * - 如果指定了该参数，当您需要将事件投递到本账号时，需要为RAM角色授予操作审计服务关联角色权限。当您需要将事件投递到其他账号时，需要为RAM角色绑定操作事件投递的系统权限策略。关于如何进行跨账号投递，请参见[将多个阿里云账号的事件投递到同一账号](~~207462~~)。
     * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
     */
    "OssWriteRoleArn"?: string;
    /**
     * 跟踪投递的日志服务项目的ARN。
     * > OssBucketName、SlsProjectArn、MaxComputeProjectArn需至少指定其中一个参数。
     * @example `acs:log:cn-shanghai:151266687691****:project/test-project`
     */
    "SlsProjectArn"?: string;
    /**
     * 操作审计向日志服务项目投递操作事件时，扮演的角色ARN。
     * - 如果不指定该参数，操作审计会通过创建服务关联角色来创建相应的资源。更多信息，请参见[操作审计服务关联角色](~~169244~~)。
     * - 如果指定了该参数，当您需要将事件投递到本账号时，需要为RAM角色授予操作审计服务关联角色权限。当您需要将事件投递到其他账号时，需要为RAM角色绑定操作事件投递的系统权限策略。关于如何进行跨账号投递，请参见[将多个阿里云账号的事件投递到同一账号](~~207462~~)。
     * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
     */
    "SlsWriteRoleArn"?: string;
    /**
     * 投递事件的读写类型，取值：
     * - Write（默认值）：写类型。
     * - Read：读类型。
     * - All：读类型和写类型。
     * @example `Write`
     */
    "EventRW"?: string;
    /**
     * 跟踪的地域。
     * 默认值为All，表示跟踪全部地域的事件。
     * 您也可以指定具体的地域。关于地域的更多信息，请调用[DescribeRegions](~~213597~~)接口查询。
     * @example `All`
     */
    "TrailRegion"?: string;
    /**
     * 是否创建多账号跟踪，取值：
     * - true：创建多账号跟踪。
     * - false（默认值）：创建单账号跟踪。
     * @example `false`
     */
    "IsOrganizationTrail"?: boolean;
    /**
     * 跟踪投递的大数据计算服务项目的ARN。
     * > OssBucketName、SlsProjectArn、MaxComputeProjectArn需至少指定其中一个参数。
     * > MaxComputeProjectArn中指定的大数据计算服务项目名称必须以actiontrail_作为前缀。
     * @example `acs:odps:cn-hangzhou:151266687691****:project/actiontrail_****`
     */
    "MaxComputeProjectArn"?: string;
    /**
     * 操作审计向大数据计算服务项目投递操作事件时，扮演的角色ARN。
     * - 如果不指定该参数，操作审计会通过创建服务关联角色来创建相应的资源。更多信息，请参见[操作审计服务关联角色](~~169244~~)。
     * - 如果指定了该参数，当您需要将事件投递到本账号时，需要为RAM角色授予操作审计服务关联角色权限。当您需要将事件投递到其他账号时，需要为RAM角色绑定操作事件投递的系统权限策略。关于如何进行跨账号投递，请参见[将多个阿里云账号的事件投递到同一账号](~~207462~~)。
     * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
     */
    "MaxComputeWriteRoleArn"?: string;
}
