import { CreateNamespaceRequest } from "./CreateNamespace/req";
import { CreateNamespaceResponse } from "./CreateNamespace/res";
import { UpdateNamespaceRequest } from "./UpdateNamespace/req";
import { UpdateNamespaceResponse } from "./UpdateNamespace/res";
import { DescribeNamespaceRequest } from "./DescribeNamespace/req";
import { DescribeNamespaceResponse } from "./DescribeNamespace/res";
import { DescribeNamespacesRequest } from "./DescribeNamespaces/req";
import { DescribeNamespacesResponse } from "./DescribeNamespaces/res";
import { DeleteNamespaceRequest } from "./DeleteNamespace/req";
import { DeleteNamespaceResponse } from "./DeleteNamespace/res";
import { CreateConfigurationRequest } from "./CreateConfiguration/req";
import { CreateConfigurationResponse } from "./CreateConfiguration/res";
import { DeployConfigurationRequest } from "./DeployConfiguration/req";
import { DeployConfigurationResponse } from "./DeployConfiguration/res";
import { DescribeConfigurationRequest } from "./DescribeConfiguration/req";
import { DescribeConfigurationResponse } from "./DescribeConfiguration/res";
import { DeleteConfigurationRequest } from "./DeleteConfiguration/req";
import { DeleteConfigurationResponse } from "./DeleteConfiguration/res";
import { BatchExportConfigurationsRequest } from "./BatchExportConfigurations/req";
import { BatchExportConfigurationsResponse } from "./BatchExportConfigurations/res";
import { BatchImportConfigurationsRequest } from "./BatchImportConfigurations/req";
import { BatchImportConfigurationsResponse } from "./BatchImportConfigurations/res";
import { CheckConfigurationCloneRequest } from "./CheckConfigurationClone/req";
import { CheckConfigurationCloneResponse } from "./CheckConfigurationClone/res";
import { CheckConfigurationExportRequest } from "./CheckConfigurationExport/req";
import { CheckConfigurationExportResponse } from "./CheckConfigurationExport/res";
import { CloneConfigurationRequest } from "./CloneConfiguration/req";
import { CloneConfigurationResponse } from "./CloneConfiguration/res";
import { DescribeImportFileUrlRequest } from "./DescribeImportFileUrl/req";
import { DescribeImportFileUrlResponse } from "./DescribeImportFileUrl/res";
import { DescribeNamespacesWithCreateRequest } from "./DescribeNamespacesWithCreate/req";
import { DescribeNamespacesWithCreateResponse } from "./DescribeNamespacesWithCreate/res";
import { DescribeTraceByConfigurationRequest } from "./DescribeTraceByConfiguration/req";
import { DescribeTraceByConfigurationResponse } from "./DescribeTraceByConfiguration/res";

interface ACM {
    /**
     * 创建命名空间。
     */
    CreateNamespace(query: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
    /**
     * 更新命名空间。
     */
    UpdateNamespace(query: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse>;
    /**
     * 获取命名空间详情。
     */
    DescribeNamespace(query: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse>;
    /**
     * 使用DescribeNamespaces来获取命名空间列表。
     */
    DescribeNamespaces(query: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse>;
    /**
     * 删除命名空间。
     */
    DeleteNamespace(query: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;
    /**
     * 创建配置。
     */
    CreateConfiguration(query: CreateConfigurationRequest): Promise<CreateConfigurationResponse>;
    /**
     * 发布配置。
     */
    DeployConfiguration(query: DeployConfigurationRequest): Promise<DeployConfigurationResponse>;
    /**
     * 获取配置。
     */
    DescribeConfiguration(query: DescribeConfigurationRequest): Promise<DescribeConfigurationResponse>;
    /**
     * 删除配置。
     */
    DeleteConfiguration(query: DeleteConfigurationRequest): Promise<DeleteConfigurationResponse>;
    BatchExportConfigurations(query: BatchExportConfigurationsRequest): Promise<BatchExportConfigurationsResponse>;
    BatchImportConfigurations(query: BatchImportConfigurationsRequest): Promise<BatchImportConfigurationsResponse>;
    CheckConfigurationClone(query: CheckConfigurationCloneRequest): Promise<CheckConfigurationCloneResponse>;
    CheckConfigurationExport(query: CheckConfigurationExportRequest): Promise<CheckConfigurationExportResponse>;
    CloneConfiguration(query: CloneConfigurationRequest): Promise<CloneConfigurationResponse>;
    DescribeImportFileUrl(query: DescribeImportFileUrlRequest): Promise<DescribeImportFileUrlResponse>;
    DescribeNamespacesWithCreate(query: DescribeNamespacesWithCreateRequest): Promise<DescribeNamespacesWithCreateResponse>;
    DescribeTraceByConfiguration(query: DescribeTraceByConfigurationRequest): Promise<DescribeTraceByConfigurationResponse>;
}
export default ACM;
