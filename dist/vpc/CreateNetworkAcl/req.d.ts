interface CreateNetworkAclRequest {
    /**
    * 网络ACL所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络ACL关联的VPC的ID。
    * @example `vpc-123456`
    */ "VpcId": string;
    /**
    * 网络ACL的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `acl-1`
    */ "NetworkAclName"?: string;
    /**
    * 网络ACL的描述信息。
    * 长度为2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `This is my NetworkAcl.`
    */ "Description"?: string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    * @example `123`
    */ "ClientToken"?: string;
}
export { CreateNetworkAclRequest };