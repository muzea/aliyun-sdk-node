import { DescribeSupportedZonesRequest } from "./DescribeSupportedZones/req";
import { DescribeSupportedZonesResponse } from "./DescribeSupportedZones/res";
import { DescribeSupportedRegionsRequest } from "./DescribeSupportedRegions/req";
import { DescribeSupportedRegionsResponse } from "./DescribeSupportedRegions/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { ModifyPrepayInstanceSpecRequest } from "./ModifyPrepayInstanceSpec/req";
import { ModifyPrepayInstanceSpecResponse } from "./ModifyPrepayInstanceSpec/res";
import { ConvertInstanceRequest } from "./ConvertInstance/req";
import { ConvertInstanceResponse } from "./ConvertInstance/res";
import { CreateNamespaceRequest } from "./CreateNamespace/req";
import { CreateNamespaceResponse } from "./CreateNamespace/res";
import { QueryModifyInstancePriceRequest } from "./QueryModifyInstancePrice/req";
import { QueryModifyInstancePriceResponse } from "./QueryModifyInstancePrice/res";
import { DeleteNamespaceRequest } from "./DeleteNamespace/req";
import { DeleteNamespaceResponse } from "./DeleteNamespace/res";
import { QueryRenewInstancePriceRequest } from "./QueryRenewInstancePrice/req";
import { QueryRenewInstancePriceResponse } from "./QueryRenewInstancePrice/res";
import { DescribeNamespacesRequest } from "./DescribeNamespaces/req";
import { DescribeNamespacesResponse } from "./DescribeNamespaces/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { ModifyPrepayNamespaceSpecRequest } from "./ModifyPrepayNamespaceSpec/req";
import { ModifyPrepayNamespaceSpecResponse } from "./ModifyPrepayNamespaceSpec/res";
import { QueryCreateInstancePriceRequest } from "./QueryCreateInstancePrice/req";
import { QueryCreateInstancePriceResponse } from "./QueryCreateInstancePrice/res";
import { QueryConvertInstancePriceRequest } from "./QueryConvertInstancePrice/req";
import { QueryConvertInstancePriceResponse } from "./QueryConvertInstancePrice/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";

interface FOASCONSOLE {
    /**
     * 您可以获取支持购买的可用区信息。
     */
    DescribeSupportedZones(query: DescribeSupportedZonesRequest): Promise<DescribeSupportedZonesResponse>;
    /**
     * 您可以获取支持购买的地域信息。
     */
    DescribeSupportedRegions(query: DescribeSupportedRegionsRequest): Promise<DescribeSupportedRegionsResponse>;
    /**
     * 续费一个包年包月flink全托管工作空间。
     */
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
     * 查询一个或多个flink全托管工作空间的详细信息。
     */
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
     * 修改包年包月的flink全托管实例计算资源的规格大小，调整后规格小于当前使用规格将进行缩容操作，调整后规格大于当前使用规格将进行扩容操作。
     */
    ModifyPrepayInstanceSpec(query: ModifyPrepayInstanceSpecRequest): Promise<ModifyPrepayInstanceSpecResponse>;
    /**
     * 您可以将按量付费的工作空间转换为包年包月的工作空间。
     */
    ConvertInstance(query: ConvertInstanceRequest): Promise<ConvertInstanceResponse>;
    /**
     * 在flink全托管实例中下创建项目空间。
     */
    CreateNamespace(query: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
    /**
     * 您可以查询实例升降配时的价格。
     */
    QueryModifyInstancePrice(query: QueryModifyInstancePriceRequest): Promise<QueryModifyInstancePriceResponse>;
    /**
     * 删除项目空间。
     */
    DeleteNamespace(query: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;
    /**
     * 您可以查询续费一个包年包月工作空间的价格。
     */
    QueryRenewInstancePrice(query: QueryRenewInstancePriceRequest): Promise<QueryRenewInstancePriceResponse>;
    /**
     * 您可以调用DescribeNamespaces查询某实例下的项目空间信息。
     */
    DescribeNamespaces(query: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse>;
    /**
     * 释放按量付费的flink全托管工作空间。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 创建一个包年包月或者按量付费flink全托管工作空间。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 修改包年包月实例下项目空间的规格。
     */
    ModifyPrepayNamespaceSpec(query: ModifyPrepayNamespaceSpecRequest): Promise<ModifyPrepayNamespaceSpecResponse>;
    /**
     * 获取本账号购买工作空间的价格。
     */
    QueryCreateInstancePrice(query: QueryCreateInstancePriceRequest): Promise<QueryCreateInstancePriceResponse>;
    /**
     * 您可以通过本API来查询按量付费实例转包年包月价格。
     */
    QueryConvertInstancePrice(query: QueryConvertInstancePriceRequest): Promise<QueryConvertInstancePriceResponse>;
    /**
     * 您可以调用UntagResources删除资源标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 您可以调用ListTagResources查询资源标签。您可以通过标签的value查询key值，或者通过key值查询value，也可以获取您在flink全托管工作空间上使用的所有标签信息。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 您可以调用本API创建资源标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 您可以调用本API创建资源标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
}
export default FOASCONSOLE;
