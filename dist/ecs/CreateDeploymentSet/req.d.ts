interface CreateDeploymentSetRequest {
    /**
    * 部署集所属地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 部署集内实例宕机迁移后，缺乏可供打散的实例库存的紧急处理方案。取值范围：
    *
    * - CancelMembershipAndStart（默认）：将实例移出部署集，宕机迁移后即刻启动实例。
    * - KeepStopped：保持异常状态等待补货充足后再启动实例。
    * @example `CancelMembershipAndStart`
    */ "OnUnableToRedeployFailedInstance"?: string;
    /**
    * 部署集描述信息。长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。
    * @example `FinanceJoshua`
    */ "Description"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 部署集名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `FinanceDeployment`
    */ "DeploymentSetName"?: string;
    /**
    * 部署域。
    * > 为提高兼容性，请尽量使用其他参数。
    * @example `null`
    */ "Domain"?: string;
    /**
    * 部署粒度。
    * > 为提高兼容性，请尽量使用其他参数。
    * @example `null`
    */ "Granularity"?: string;
    /**
    * 部署策略。
    * > 为提高兼容性，请尽量使用其他参数。
    * @example `null`
    */ "Strategy"?: string;
}
export { CreateDeploymentSetRequest };