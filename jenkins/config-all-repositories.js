module.exports = {
    onboardingConfig:
    {
        "extends": [
            ":dependencyDashboard",
            ":preserveSemverRanges"
        ]
    },

    rangeStrategy: "bump",
    
    endpoint: "https://api.github.com",
    platform: "github",
    
    dependencyDashboard: true,

    major: {
        "dependencyDashboardApproval": true
    },

    dependencyDashboardLabels: [
        'Renovate bot', 
        'Do not close'
    ],

    logFileLevel: 'debug',
    printConfig: true,
    npmrcMerge: true,

    vulnerabilityAlerts: {
        labels: ['security'],
        assignees: ['ecad59']
    },

    repositories: [
        'ecad59/ansible',
        'ecad59/docker',
        'ecad59/github-library',
        'ecad59/gitlab-library',
        'ecad59/renovate',
        'ecad59/terraform'
    ],

    hostRules: [
        {
            "domainName": "github.com",
            "hostType": 'github',
            "token": "$RENOVATE_TOKEN"
        }
    ]
}