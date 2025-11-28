// Data for different object types
const objectTypeData = {
  "ves.io.schema.service_policy": {
    "items": [
      {
        "name": "cdatf5ak11-rlbdvcbk",
        "tenant": "ves-io",
        "namespace": "security-ops",
        "uid": "sp-001",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.policy_rules.rate_limit": {
                "expected": 1000,
                "actual": 500
              }
            },
            "err": ""
          },
          {
            "service_name": "policy-validator",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.config.version": {
                "expected": "2.0.1",
                "actual": "1.9.5"
              },
              "spec.config.enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.policy.enforcement": {
                "expected": "strict",
                "actual": "permissive"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.runtime.timeout": {
                "expected": 300,
                "actual": 150
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "ct-15-3-edygqquc",
        "tenant": "ves-io",
        "namespace": "app-delivery",
        "uid": "sp-002",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.policy_rules.timeout": {
                "expected": 30,
                "actual": 60
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.cache.ttl": {
                "expected": 3600,
                "actual": 1800
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.memory.limit": {
                "expected": "512Mi",
                "actual": "256Mi"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "kc6-de1-gjwyiyxy",
        "tenant": "ves-io",
        "namespace": "network-security",
        "uid": "sp-003",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.policy.max_connections": {
                "expected": 10000,
                "actual": 5000
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.rate_limiting.burst_size": {
                "expected": 100,
                "actual": 50
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "sn-demo021-uffvkylc",
        "tenant": "ves-io",
        "namespace": "edge-protection",
        "uid": "sp-004",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.policy_rules.whitelist": {
                "expected": ["192.168.1.0/24"],
                "actual": []
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.cache.enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "service endpoint not found"
          }
        ]
      },
      {
        "name": "shaanz-adhbubxi",
        "tenant": "ves-io",
        "namespace": "waf-policies",
        "uid": "sp-005",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.policy_rules.inspection_mode": {
                "expected": "blocking",
                "actual": "monitoring"
              }
            },
            "err": ""
          },
          {
            "service_name": "policy-validator",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.signatures.version": {
                "expected": "2024.11",
                "actual": "2024.09"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.anomaly_detection.threshold": {
                "expected": 8,
                "actual": 5
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "snowing-hsejkthj",
        "tenant": "ves-io",
        "namespace": "load-balancing",
        "uid": "sp-006",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.lb.algorithm": {
                "expected": "least-connections",
                "actual": "round-robin"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.health_check.interval": {
                "expected": 10,
                "actual": 30
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.session.persistence": {
                "expected": "source-ip",
                "actual": "none"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "tspal481-hwarckit",
        "tenant": "ves-io",
        "namespace": "api-protection",
        "uid": "sp-007",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.api.rate_limit_per_user": {
                "expected": 1000,
                "actual": 500
              }
            },
            "err": ""
          },
          {
            "service_name": "policy-validator",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "validator service unavailable"
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.jwt.validation": {
                "expected": "strict",
                "actual": "relaxed"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.oauth.token_lifetime": {
                "expected": 3600,
                "actual": 1800
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "pruthvi-34-bsiwrmfg",
        "tenant": "ves-io",
        "namespace": "ddos-mitigation",
        "uid": "sp-008",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.ddos.threshold_pps": {
                "expected": 100000,
                "actual": 50000
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.scrubbing.enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.behavioral_analysis.sensitivity": {
                "expected": "high",
                "actual": "medium"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "routed-ddos-org-ndndsybd",
        "tenant": "ves-io",
        "namespace": "content-delivery",
        "uid": "sp-009",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "policy-validator",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.cdn.cache_ttl": {
                "expected": 86400,
                "actual": 3600
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.compression.enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.optimization.minify": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "e-enablfe4-domain-wqqjjmyk",
        "tenant": "ves-io",
        "namespace": "bot-defense",
        "uid": "sp-010",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.bot_detection.mode": {
                "expected": "challenge",
                "actual": "monitor"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.captcha.provider": {
                "expected": "recaptcha-v3",
                "actual": "recaptcha-v2"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.ml_model.version": {
                "expected": "3.2.1",
                "actual": "3.1.0"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "bot defense module not initialized"
          }
        ]
      },
      {
        "name": "py-testus-smevyinb",
        "tenant": "ves-io",
        "namespace": "ssl-termination",
        "uid": "sp-011",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.tls.min_version": {
                "expected": "1.3",
                "actual": "1.2"
              }
            },
            "err": ""
          },
          {
            "service_name": "policy-validator",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.cipher_suites": {
                "expected": ["TLS_AES_128_GCM_SHA256", "TLS_AES_256_GCM_SHA384"],
                "actual": ["TLS_AES_128_GCM_SHA256"]
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.hsts.max_age": {
                "expected": 31536000,
                "actual": 0
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "sn-demo028-osapngdj",
        "tenant": "ves-io",
        "namespace": "firewall-rules",
        "uid": "sp-012",
        "service_info": [
          {
            "service_name": "policy-engine",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.firewall.default_action": {
                "expected": "deny",
                "actual": "allow"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.geo_blocking.countries": {
                "expected": ["CN", "RU", "KP"],
                "actual": []
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.ip_reputation.enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      }
    ]
  },
  "ves.io.vega.cfg.user_roles": {
    "items": [
      {
        "name": "volterra-kjrnplcw",
        "tenant": "ves-io",
        "namespace": "identity-management",
        "uid": "ur-001",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.permissions.admin": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "auth-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.auth.mfa_enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "service endpoint unreachable"
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.security.encryption": {
                "expected": "AES-256",
                "actual": "AES-128"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "mrfigs-xqkrnhbg",
        "tenant": "ves-io",
        "namespace": "access-control",
        "uid": "ur-002",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.permissions.deploy": {
                "expected": true,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.limits.api_calls": {
                "expected": 10000,
                "actual": 5000
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.features.preview": {
                "expected": false,
                "actual": true
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "jazz-tenant-uwmkqseh",
        "tenant": "ves-io",
        "namespace": "rbac-policies",
        "uid": "ur-003",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "auth-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.sso.provider": {
                "expected": "okta",
                "actual": "auth0"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.session.timeout": {
                "expected": 3600,
                "actual": 7200
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.audit.retention_days": {
                "expected": 90,
                "actual": 30
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "mj4email-egkrqwqy",
        "tenant": "ves-io",
        "namespace": "viewer-role",
        "uid": "ur-004",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.permissions.read_only": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.ui.dashboard_access": {
                "expected": "limited",
                "actual": "full"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "jfrancisco-sjcnlbpj",
        "tenant": "ves-io",
        "namespace": "operator-role",
        "uid": "ur-005",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.permissions.manage_configs": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "auth-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.mfa.required": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.api.write_access": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "role configuration not found"
          }
        ]
      },
      {
        "name": "tenant1test-xfnonapf",
        "tenant": "ves-io",
        "namespace": "security-admin",
        "uid": "ur-006",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.permissions.security_policies": {
                "expected": "full",
                "actual": "limited"
              }
            },
            "err": ""
          },
          {
            "service_name": "auth-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.password.complexity": {
                "expected": "high",
                "actual": "medium"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.alert.notifications": {
                "expected": "all",
                "actual": "critical"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "op-org-de1-bfvsbikd",
        "tenant": "ves-io",
        "namespace": "network-admin",
        "uid": "ur-007",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.network.vlan_management": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.routing.bgp_access": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.vpn.config_access": {
                "expected": "full",
                "actual": "read-only"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "sun-ct27-gmlgbsog",
        "tenant": "ves-io",
        "namespace": "audit-role",
        "uid": "ur-008",
        "service_info": [
          {
            "service_name": "rbac-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.permissions.audit_logs": {
                "expected": "full",
                "actual": "none"
              }
            },
            "err": ""
          },
          {
            "service_name": "auth-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.compliance.reports": {
                "expected": "enabled",
                "actual": "disabled"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.export.format": {
                "expected": "json",
                "actual": "csv"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      }
    ]
  },
  "ves.io.schema.quota": {
    "items": [
      {
        "name": "sh-test-azure-07-kgultjdc",
        "tenant": "ves-io",
        "namespace": "resource-management",
        "uid": "q-001",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.limits.cpu": {
                "expected": 100,
                "actual": 50
              },
              "spec.limits.memory": {
                "expected": "10Gi",
                "actual": "5Gi"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.bandwidth.limit": {
                "expected": "1000Mbps",
                "actual": "500Mbps"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.storage.quota": {
                "expected": "100Gi",
                "actual": "50Gi"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "quota service not configured"
          }
        ]
      },
      {
        "name": "test-ct-123456-cuppacis",
        "tenant": "ves-io",
        "namespace": "enterprise-tier",
        "uid": "q-002",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.priority.level": {
                "expected": "premium",
                "actual": "standard"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "fedramp-1-syisxbun",
        "tenant": "ves-io",
        "namespace": "compute-resources",
        "uid": "q-003",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.limits.vcpu": {
                "expected": 64,
                "actual": 32
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.limits.instances": {
                "expected": 50,
                "actual": 20
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.limits.gpu": {
                "expected": 4,
                "actual": 0
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "volterra-ydoxdkhv",
        "tenant": "ves-io",
        "namespace": "storage-quota",
        "uid": "q-004",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.storage.block": {
                "expected": "500Gi",
                "actual": "100Gi"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.storage.object": {
                "expected": "1Ti",
                "actual": "500Gi"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.backup.retention": {
                "expected": "30d",
                "actual": "7d"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "volterra-avinash-ydoxdkhv",
        "tenant": "ves-io",
        "namespace": "network-quota",
        "uid": "q-005",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.network.egress_bandwidth": {
                "expected": "10Gbps",
                "actual": "1Gbps"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.network.ingress_bandwidth": {
                "expected": "10Gbps",
                "actual": "5Gbps"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.network.connections": {
                "expected": 100000,
                "actual": 50000
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "fakeaccount-avinash-oqgwgeqj",
        "tenant": "ves-io",
        "namespace": "api-rate-limits",
        "uid": "q-006",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.api.requests_per_minute": {
                "expected": 10000,
                "actual": 1000
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.api.burst_limit": {
                "expected": 5000,
                "actual": 500
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "rate limiter not configured"
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "kc-32-shijyisw-quota",
        "tenant": "ves-io",
        "namespace": "database-limits",
        "uid": "q-007",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.database.connections": {
                "expected": 1000,
                "actual": 100
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.database.size": {
                "expected": "100Gi",
                "actual": "10Gi"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.database.iops": {
                "expected": 10000,
                "actual": 3000
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "edynesokta-quota-plan",
        "tenant": "ves-io",
        "namespace": "container-limits",
        "uid": "q-008",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.containers.max_pods": {
                "expected": 500,
                "actual": 100
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.containers.max_namespaces": {
                "expected": 50,
                "actual": 10
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.containers.registry_storage": {
                "expected": "200Gi",
                "actual": "50Gi"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "container runtime not available"
          }
        ]
      },
      {
        "name": "sn-demo021-quota",
        "tenant": "ves-io",
        "namespace": "monitoring-quota",
        "uid": "q-009",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.metrics.retention_days": {
                "expected": 90,
                "actual": 30
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.logs.volume_gb": {
                "expected": 1000,
                "actual": 100
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.alerts.max_rules": {
                "expected": 500,
                "actual": 100
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "shaanz-compute-quota",
        "tenant": "ves-io",
        "namespace": "serverless-quota",
        "uid": "q-010",
        "service_info": [
          {
            "service_name": "quota-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.serverless.functions": {
                "expected": 1000,
                "actual": 100
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.serverless.concurrent_executions": {
                "expected": 500,
                "actual": 50
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.serverless.memory_per_function": {
                "expected": "4096Mi",
                "actual": "1024Mi"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      }
    ]
  },
  "ves.io.schema.tenant": {
    "items": [
      {
        "name": "py-jun17-tenant-nktewycu",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "00dd0259-72d6-496b-b10b-29a2a07bc25b",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.crm_info": {
                "expected": {
                  "account_id": "",
                  "customer_identifier": "",
                  "entitled_skus": [],
                  "entitlement_id": "",
                  "order_type": "",
                  "subscription_id": ""
                },
                "actual": null
              },
              "spec.gc_spec.state": {
                "expected": "StateActive",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "no matching object found in service"
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.deployment.region": {
                "expected": "us-west-2",
                "actual": "us-east-1"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.performance.sla": {
                "expected": "99.99",
                "actual": "99.9"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "service version mismatch"
          }
        ]
      },
      {
        "name": "eywa-own-msp-9-dtvgwaqe",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "010c1be3-8fbb-430a-9e5b-ce3fd3043fbd",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.origin": {
                "expected": "ORIGIN_F5XC",
                "actual": "ORIGIN_UNKNOWN"
              },
              "spec.gc_spec.state": {
                "expected": "StateActive",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.addon_services_subscribed.extra": {
                "expected": null,
                "actual": "f5xc-base"
              },
              "spec.gc_spec.addon_services_subscribed.missing": {
                "expected": "f5xc-delegated-access-support",
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.plan_type": {
                "expected": "INDIVIDUAL",
                "actual": "PLAN_TYPE_UNSPECIFIED"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.shared_public_vip.extra": {
                "expected": null,
                "actual": {
                  "kind": "ves.io.schema.public_ip.Object",
                  "name": "",
                  "namespace": "",
                  "tenant": "",
                  "uid": "c7143a07-a1b7-4e28-949d-b4d734ed68da"
                }
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.state": {
                "expected": "StateSuspended",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "fedramp-1-syisxbun",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "0153d9bd-ebd2-479e-b8b2-85859aba4a68",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.state": {
                "expected": "StateActive",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.compliance.fedramp": {
                "expected": "high",
                "actual": "moderate"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.encryption.fips_mode": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "kc6-de1-gjwyiyxy",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "0175de70-46e2-4280-ae7f-ab56ef6d33e3",
        "service_info": [
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "no matching object found in service"
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.deployment.zone": {
                "expected": "eu-west-1",
                "actual": "us-east-1"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "sn-demo021-uffvkylc",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "018fee88-fb2a-44a7-9b66-396bdc3b6792",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.origin": {
                "expected": "ORIGIN_F5XC",
                "actual": "ORIGIN_UNKNOWN"
              },
              "spec.gc_spec.state": {
                "expected": "StateSuspended",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.addon_services_subscribed.extra": {
                "expected": null,
                "actual": "f5xc-base"
              },
              "spec.gc_spec.addon_services_subscribed.missing": {
                "expected": "f5xc-delegated-access-support",
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.billing.plan": {
                "expected": "enterprise",
                "actual": "standard"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.support.tier": {
                "expected": "premium",
                "actual": "basic"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "shaanz-adhbubxi",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "01a38790-951b-4799-afda-7896c0ffa979",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.origin": {
                "expected": "ORIGIN_F5XC",
                "actual": "ORIGIN_UNKNOWN"
              },
              "spec.gc_spec.plan_type": {
                "expected": "TEAM",
                "actual": "FREE"
              },
              "spec.gc_spec.state": {
                "expected": "StateActive",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.addon_services_subscribed.extra": {
                "expected": null,
                "actual": "f5xc-base"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.features.advanced_analytics": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.integrations.slack": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "snowing-hsejkthj",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "01bc72f1-506f-48ea-81d7-f467c0a0e571",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.origin": {
                "expected": "ORIGIN_UNKNOWN",
                "actual": "ORIGIN_F5XC"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.addon_services_subscribed.missing": {
                "expected": "f5xc-delegated-access-support",
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "tspal481-hwarckit",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "02072abf-a81d-49cc-a3d9-488b3d089282",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.crm_info": {
                "expected": {
                  "account_id": "",
                  "customer_identifier": "",
                  "entitled_skus": [],
                  "entitlement_id": "",
                  "order_type": "",
                  "subscription_id": ""
                },
                "actual": null
              },
              "spec.gc_spec.state": {
                "expected": "StateDisabled",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "configuration mismatch"
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.notifications.email": {
                "expected": "enabled",
                "actual": "disabled"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.maintenance.window": {
                "expected": "00:00-04:00 UTC",
                "actual": "not set"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "pruthvi-34-bsiwrmfg",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "02258132-36b7-495d-bfd7-dd1e9289ee88",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.crm_info": {
                "expected": {
                  "account_id": "",
                  "customer_identifier": "",
                  "entitled_skus": [],
                  "entitlement_id": "",
                  "order_type": "",
                  "subscription_id": ""
                },
                "actual": null
              },
              "spec.gc_spec.state": {
                "expected": "StateDisabled",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "no matching object found in service"
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.backup.enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "routed-ddos-org-ndndsybd",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "0229f448-a3c4-4850-8e0d-2dc784df1406",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.state": {
                "expected": "StateActive",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "no matching object found in service"
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.ddos.mitigation_enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.routing.bgp_enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "e-enablfe4-domain-wqqjjmyk",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "025ec7e2-cc69-45cb-9494-c3f0441757aa",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.crm_info": {
                "expected": {
                  "account_id": "SFA-470303",
                  "customer_identifier": "",
                  "entitled_skus": [
                    "F5-V-O-ALL-BASE-PKG",
                    "F5-V-O-MCE-STK-ND4C"
                  ],
                  "entitlement_id": "fb1fcd24-9614-4946-94cb-3b9940721e0e",
                  "order_type": "paid",
                  "subscription_id": "TEEM-ccb28c3d-8f53"
                },
                "actual": null
              },
              "spec.gc_spec.state": {
                "expected": "StateActive",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.addon_services_subscribed.extra": {
                "expected": null,
                "actual": "f5xc-base"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.domain.validation": {
                "expected": "auto",
                "actual": "manual"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.certificate.auto_renew": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "py-testus-smevyinb",
        "tenant": "ves-io",
        "namespace": "system",
        "uid": "0290ca91-dffe-40f7-8a9a-bc49cf365990",
        "service_info": [
          {
            "service_name": "akar",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.state": {
                "expected": "StateActive",
                "actual": "StateUndefined"
              }
            },
            "err": ""
          },
          {
            "service_name": "blindfold",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "tpmauthority",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.spoke_vpc_manual_attachment": {
                "expected": false,
                "actual": null
              }
            },
            "err": ""
          },
          {
            "service_name": "viaconnector",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.gc_spec.addon_services_subscribed.extra": {
                "expected": null,
                "actual": "f5xc-base"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.test.environment": {
                "expected": "staging",
                "actual": "production"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      }
    ]
  },
  "ves.io.schema.saas_config": {
    "items": [
      {
        "name": "ss-child-tenant4-yfdmcobd",
        "tenant": "ves-io",
        "namespace": "platform-config",
        "uid": "sc-001",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "deployment-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "jazz-tenant-config",
        "tenant": "ves-io",
        "namespace": "cloud-config",
        "uid": "sc-002",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "deployment-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.multi_region": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.cdn_enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.auto_scaling": {
                "expected": "enabled",
                "actual": "disabled"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "sn-demo028-config",
        "tenant": "ves-io",
        "namespace": "application-config",
        "uid": "sc-003",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.environment": {
                "expected": "production",
                "actual": "development"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.cache_strategy": {
                "expected": "aggressive",
                "actual": "conservative"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.monitoring_interval": {
                "expected": 30,
                "actual": 60
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "volterra-platform-config",
        "tenant": "ves-io",
        "namespace": "infrastructure-config",
        "uid": "sc-004",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.high_availability": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "deployment-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.disaster_recovery": {
                "expected": "enabled",
                "actual": "disabled"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.rpo_minutes": {
                "expected": 15,
                "actual": 60
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "DR module not installed"
          }
        ]
      },
      {
        "name": "fedramp-saas-config",
        "tenant": "ves-io",
        "namespace": "compliance-config",
        "uid": "sc-005",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.compliance_mode": {
                "expected": "fedramp-high",
                "actual": "standard"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.audit_logging": {
                "expected": "comprehensive",
                "actual": "basic"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.encryption_at_rest": {
                "expected": "fips-140-2",
                "actual": "aes-256"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "shaanz-app-config",
        "tenant": "ves-io",
        "namespace": "app-settings",
        "uid": "sc-006",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "deployment-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.deployment.strategy": {
                "expected": "canary",
                "actual": "rolling-update"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.feature_flags": {
                "expected": ["new-ui", "beta-api"],
                "actual": []
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.rollback_enabled": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "e-enablfe4-settings",
        "tenant": "ves-io",
        "namespace": "global-config",
        "uid": "sc-007",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.data_residency": {
                "expected": "eu",
                "actual": "us"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.gdpr_compliant": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.data_classification": {
                "expected": "confidential",
                "actual": "internal"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "py-testus-platform",
        "tenant": "ves-io",
        "namespace": "test-config",
        "uid": "sc-008",
        "service_info": [
          {
            "service_name": "config-manager",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.test_mode": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "deployment-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.mock_services": {
                "expected": "enabled",
                "actual": "disabled"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.saas_settings.test_data_gen": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "test environment not configured"
          }
        ]
      }
    ]
  },
  "ves.io.schema.api_credential": {
    "items": [
      {
        "name": "kc-32-shijyisw",
        "tenant": "ves-io",
        "namespace": "api-gateway",
        "uid": "ac-001",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.expiry_date": {
                "expected": "2025-12-31",
                "actual": "2025-06-30"
              }
            },
            "err": ""
          },
          {
            "service_name": "rotation-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.rotation_interval": {
                "expected": 90,
                "actual": 180
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "credential service not initialized"
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.access_level": {
                "expected": "read_write",
                "actual": "read_only"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "cdatf5al11-rlbdvcbl",
        "tenant": "ves-io",
        "namespace": "dev-sandbox",
        "uid": "ac-002",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.scope": {
                "expected": "global",
                "actual": "local"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "jazz-api-token",
        "tenant": "ves-io",
        "namespace": "service-accounts",
        "uid": "ac-003",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.token_type": {
                "expected": "jwt",
                "actual": "bearer"
              }
            },
            "err": ""
          },
          {
            "service_name": "rotation-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.rotation.auto_rotate": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.permissions": {
                "expected": ["read", "write", "delete"],
                "actual": ["read"]
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "mj4email-service-key",
        "tenant": "ves-io",
        "namespace": "automation",
        "uid": "ac-004",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.last_used": {
                "expected": "2025-11-28",
                "actual": "2025-10-15"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.rate_limit": {
                "expected": 10000,
                "actual": 1000
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "jfrancisco-oauth-client",
        "tenant": "ves-io",
        "namespace": "oauth-clients",
        "uid": "ac-005",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.client_secret": {
                "expected": "rotated",
                "actual": "original"
              }
            },
            "err": ""
          },
          {
            "service_name": "rotation-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.oauth.grant_types": {
                "expected": ["client_credentials", "authorization_code"],
                "actual": ["client_credentials"]
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.oauth.redirect_uris": {
                "expected": ["https://app.example.com/callback"],
                "actual": []
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "oauth provider not initialized"
          }
        ]
      },
      {
        "name": "tenant1test-api-secret",
        "tenant": "ves-io",
        "namespace": "ci-cd",
        "uid": "ac-006",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.encrypted": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.cicd_integration": {
                "expected": "jenkins",
                "actual": "none"
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.pipeline_access": {
                "expected": "full",
                "actual": "limited"
              }
            },
            "err": ""
          }
        ]
      },
      {
        "name": "op-org-webhook-token",
        "tenant": "ves-io",
        "namespace": "webhooks",
        "uid": "ac-007",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "rotation-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.rotation.last_rotated": {
                "expected": "2025-11-01",
                "actual": "2025-06-01"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.webhook.signature_verification": {
                "expected": "hmac-sha256",
                "actual": "none"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.webhook.retry_policy": {
                "expected": "exponential",
                "actual": "linear"
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "sun-ct27-access-key",
        "tenant": "ves-io",
        "namespace": "infrastructure",
        "uid": "ac-008",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.key_algorithm": {
                "expected": "RSA-4096",
                "actual": "RSA-2048"
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.certificate_expiry": {
                "expected": "2026-12-31",
                "actual": "2025-12-31"
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.ssh_access": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "fedramp-secure-key",
        "tenant": "ves-io",
        "namespace": "security",
        "uid": "ac-009",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.hsm_backed": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "rotation-service",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.rotation.mandatory_rotation_days": {
                "expected": 30,
                "actual": 90
              }
            },
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_FOUND",
            "diff": null,
            "err": "HSM module not available"
          },
          {
            "service_name": "opera",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.fips_140_3": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "volterra-master-token",
        "tenant": "ves-io",
        "namespace": "admin-credentials",
        "uid": "ac-010",
        "service_info": [
          {
            "service_name": "credential-vault",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "rotation-service",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.mfa_required": {
                "expected": true,
                "actual": false
              }
            },
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.ip_whitelist": {
                "expected": ["10.0.0.0/8"],
                "actual": []
              }
            },
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "NOT_SYNCED",
            "diff": {
              "spec.credential.admin_privileges": {
                "expected": "full",
                "actual": "limited"
              }
            },
            "err": ""
          }
        ]
      }
    ]
  },
  "ves.io.schema.namespace": {
    "items": [
      {
        "name": "sun-ct16-rbsgerqm",
        "tenant": "ves-io",
        "namespace": "prod-workloads",
        "uid": "ns-001",
        "service_info": [
          {
            "service_name": "namespace-controller",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "nofix-cons-xlfdmkii",
        "tenant": "ves-io",
        "namespace": "staging-env",
        "uid": "ns-002",
        "service_info": [
          {
            "service_name": "namespace-controller",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      },
      {
        "name": "edynesokta-oqgwgeqj",
        "tenant": "ves-io",
        "namespace": "dev-cluster",
        "uid": "ns-003",
        "service_info": [
          {
            "service_name": "namespace-controller",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "tashik",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "nio",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "opera",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          },
          {
            "service_name": "pluto",
            "status": "SYNCED",
            "diff": null,
            "err": ""
          }
        ]
      }
    ]
  }
};

// Default export for backward compatibility
export default objectTypeData["ves.io.schema.tenant"];

export function getAllContacts() {
  return objectTypeData["ves.io.schema.tenant"].items;
}

export function getContact(uid) {
  // Search across all object types
  for (const objectType in objectTypeData) {
    const found = objectTypeData[objectType].items.find(item => item.uid === uid);
    if (found) return found;
  }
  return null;
}

export function getDataByObjectType(objectType) {
  return objectTypeData[objectType] || { items: [] };
}