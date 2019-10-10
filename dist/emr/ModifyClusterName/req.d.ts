interface ModifyClusterNameRequest {
    /**
    * 区域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群 ID
    * @example `C-D7958B72E59BAB88`
    */ "Id": string;
    /**
    * 集群新的名称，要求和创建集群时一致。长度限制为1-64个字符，只允许包含中文、字母、数字、-、_。
    * @example `bi_hadoop`
    */ "Name": string;
}
export { ModifyClusterNameRequest };