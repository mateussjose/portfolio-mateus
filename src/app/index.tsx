import OutlineText from '../components/OutlineText';
import { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  personalInfo,
  education,
  extracurriculars,
  skillGroups,
  projects,
} from '../constants/data';

const colors = {
  background: '#080B0D',
  surface: '#111719',
  border: '#273033',
  white: '#F5F7F7',
  muted: '#8B9699',
  cyan: '#00D9FF',
  lime: '#B8FF3B',
};

function SectionHeading({ number, title, subtitle }) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionNumber}>{number} // 05</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionSubtitle}>{subtitle}</Text>
    </View>
  );
}

function TagList({ items }) {
  return (
    <View style={styles.tagList}>
      {items.map((item) => (
        <View style={styles.tag} key={item}>
          <Text style={styles.tagText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const positions = useRef({});
  const [hoveredSection, setHoveredSection] = useState(null);

  const registerPosition = (section) => (event) => {
    positions.current[section] = event.nativeEvent.layout.y;
  };

  const goToSection = (section) => {
    const position = section === 'home' ? 0 : positions.current[section];

    if (position !== undefined) {
      scrollRef.current?.scrollTo({ y: position, animated: true });
    }
  };

  const openLink = (url) => Linking.openURL(url);

  const navigationItems = [
    { label: 'Início', section: 'home', icon: 'home-outline' },
    { label: 'Formação', section: 'education', icon: 'school-outline' },
    { label: 'Atividades', section: 'activities', icon: 'briefcase-outline' },
    { label: 'Habilidades', section: 'skills', icon: 'code-slash-outline' },
    { label: 'Projetos', section: 'projects', icon: 'layers-outline' },
    { label: 'Contato', section: 'contact', icon: 'mail-outline' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>M<Text style={styles.cyan}>_</Text></Text>
          <View style={styles.online}>
            <View style={styles.statusDot} />
            <Text style={styles.headerLabel}>ONLINE</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.systemLabel}>
            ● SYSTEM_01 // 00 / 05 BUILDING_CYCLE
          </Text>
          <Text style={styles.version}>[v2026.2]</Text>

          <Text style={styles.heroName}>MATEUS</Text>
          <OutlineText
            text="BISPO"
            size={63}
            width={270}
            style={{ marginTop: -10 }}
          />

          <Text style={styles.role}>{personalInfo.role}</Text>
          <Text style={styles.tagline}>{personalInfo.tagline}</Text>

          <View style={styles.photoContainer}>
            <Image
              source={require('../../assets/images/mateus.jpg')}
              style={styles.photo}
              resizeMode="cover"
            />
            <View style={styles.photoCorner} />
            <Text style={styles.photoLabel}>MATEUS_PORTFOLIO_CORE</Text>
          </View>

          <Pressable onPress={() => goToSection('education')}>
            <Text style={styles.scrollLabel}>SCROLL TO EXPLORE ↓</Text>
          </Pressable>
        </View>

        <View
          style={styles.section}
          onLayout={registerPosition('education')}
        >
          <SectionHeading
            number="01"
            title="FORMAÇÃO"
            subtitle="EDUCATION // PROGRESS"
          />

          {education.map((item) => (
            <View style={styles.educationItem} key={item.number}>
              <View style={styles.itemMeta}>
                <Text style={styles.metaCode}>{item.code}</Text>
                <Text style={styles.metaPeriod}>{item.period}</Text>
              </View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <TagList items={item.tags} />
            </View>
          ))}

          <Text style={styles.terminal}>
            root@mateus:~$ cat academic.log → learning continuously...
          </Text>
        </View>

        <View
          style={styles.section}
          onLayout={registerPosition('activities')}
        >
          <SectionHeading
            number="02"
            title="ATIVIDADES_EXTRAS"
            subtitle="EXPERIENCE // BEYOND ACADEMIA"
          />

          {extracurriculars.map((item) => (
            <View style={styles.activityItem} key={item.number}>
              <Text style={styles.activityNumber}>{item.number}</Text>
              <Text style={styles.metaCode}>{item.code}</Text>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <TagList items={item.tags} />
            </View>
          ))}
        </View>

        <View
          style={styles.section}
          onLayout={registerPosition('skills')}
        >
          <SectionHeading
            number="03"
            title="HABILIDADES"
            subtitle="COMPETENCIES // HARD SKILLS"
          />

          {skillGroups.map((group) => (
            <View style={styles.skillGroup} key={group.title}>
              <Text style={styles.groupTitle}>
                {group.icon} {group.title}
                <Text style={styles.groupCount}>
                  [{String(group.skills.length).padStart(2, '0')} ENTRIES]
                </Text>
              </Text>

              {group.skills.map((skill) => (
                <View style={styles.skillItem} key={skill.number}>
                  <Text style={styles.skillNumber}>{skill.number}</Text>
                  <View style={styles.skillInfo}>
                    <Text style={styles.skillName}>{skill.name}</Text>
                    <Text style={styles.skillDetail}>{skill.detail}</Text>
                  </View>
                  <Text style={styles.skillStatus}>{skill.status}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View
          style={styles.section}
          onLayout={registerPosition('projects')}
        >
          <SectionHeading
            number="04"
            title="PROJETOS"
            subtitle="SELECTED_BUILDS // FINAL YEARS"
          />

          {projects.map((project) => (
            <View style={styles.projectItem} key={project.number}>
              <View style={styles.itemMeta}>
                <Text style={styles.metaCode}>{project.code}</Text>
                <Text style={styles.metaPeriod}>{project.category}</Text>
              </View>

              <Text style={styles.itemTitle}>{project.name}</Text>
              <Text style={styles.itemDescription}>
                {project.description}
              </Text>

              <TagList items={project.technologies} />

              {project.route && (
                <Pressable
                  style={styles.projectLink}
                  onPress={() => router.push(project.route)}
                >
                  <Text style={styles.projectLinkText}>OPEN PROJECT ↗</Text>
                </Pressable>
              )}
            </View>
          ))}
        </View>

        <View
          style={styles.section}
          onLayout={registerPosition('contact')}
        >
          <SectionHeading
            number="05"
            title="LET'S BUILD"
            subtitle="SOMETHING."
          />

          <Text style={styles.contactDescription}>
            Aberto a oportunidades, projetos acadêmicos e experiências que
            permitam transformar aprendizado em software.
          </Text>

          <Text style={styles.contactProtocol}>
            CONTACT_PROTOCOL // READY
          </Text>

          <Pressable
            style={styles.contactItem}
            onPress={() => openLink(`mailto:${personalInfo.email}`)}
          >
            <Text style={styles.contactLabel}>→ EMAIL</Text>
            <Text style={styles.contactValue}>{personalInfo.email}</Text>
          </Pressable>

          <Pressable
            style={styles.contactItem}
            onPress={() => openLink(personalInfo.github)}
          >
            <Text style={styles.contactLabel}>→ GITHUB</Text>
            <Text style={styles.contactValue}>mateussjose ↗</Text>
          </Pressable>

          <Pressable
            style={styles.contactItem}
            onPress={() => openLink(personalInfo.linkedin)}
          >
            <Text style={styles.contactLabel}>→ LINKEDIN</Text>
            <Text style={styles.contactValue}>Mateus Oliveira ↗</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>MATEUS BISPO</Text>
          <Text style={styles.footerText}>
            DESIGNED // BUILT // ITERATED
          </Text>
          <Text style={styles.footerText}>
            © 2026 MATEUS BISPO
          </Text>
          <Text style={styles.footerText}>BR / UTC−03</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          {navigationItems.map((item) => {
            const hovered = hoveredSection === item.section;

            return (
              <Pressable
                key={item.section}
                style={[
                  styles.bottomNavItem,
                  hovered && styles.bottomNavItemHover,
                ]}
                onPress={() => goToSection(item.section)}
                onHoverIn={() => setHoveredSection(item.section)}
                onHoverOut={() => setHoveredSection(null)}
              >
                <Ionicons
                  name={item.icon}
                  size={16}
                  color={hovered ? colors.cyan : colors.muted}
                />
                <Text
                  style={[
                    styles.bottomNavText,
                    hovered && styles.bottomNavTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}

          <View style={styles.navDivider} />

          <Pressable
            style={styles.githubButton}
            onPress={() => openLink(personalInfo.github)}
          >
            <Ionicons
              name="logo-github"
              size={19}
              color={colors.background}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 23,
    paddingBottom: 120,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  logo: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '900',
  },
  cyan: {
    color: colors.cyan,
  },
  online: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.lime,
  },
  headerLabel: {
    color: colors.lime,
    fontSize: 9,
    letterSpacing: 2,
  },
  hero: {
    paddingTop: 48,
  },
  systemLabel: {
    color: colors.lime,
    fontSize: 9,
    letterSpacing: 1,
  },
  version: {
    color: colors.muted,
    fontSize: 9,
    marginTop: 8,
    letterSpacing: 1,
  },
  heroName: {
    color: colors.white,
    fontSize: 63,
    fontWeight: '900',
    letterSpacing: -3,
    marginTop: 48,
  },
  role: {
    color: colors.muted,
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 16,
  },
  tagline: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
    marginTop: 30,
  },
  photoContainer: {
    height: 330,
    marginTop: 35,
    position: 'relative',
    backgroundColor: colors.surface,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: colors.border,
  },
  photoCorner: {
    position: 'absolute',
    width: 35,
    height: 35,
    right: -6,
    bottom: -6,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.lime,
  },
  photoLabel: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    color: colors.white,
    backgroundColor: '#080B0DCC',
    padding: 7,
    fontSize: 8,
    letterSpacing: 1,
  },
  scrollLabel: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1.5,
    marginTop: 28,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  section: {
    paddingTop: 80,
  },
  sectionHeading: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 22,
    marginBottom: 22,
  },
  sectionNumber: {
    color: colors.cyan,
    fontSize: 9,
    letterSpacing: 1.5,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1.5,
    marginTop: 13,
  },
  sectionSubtitle: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1.5,
    marginTop: 10,
  },
  educationItem: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  itemMeta: {
    gap: 10,
    marginBottom: 22,
  },
  metaCode: {
    color: colors.cyan,
    fontSize: 9,
    letterSpacing: 1.1,
  },
  metaPeriod: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1,
  },
  itemTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: '800',
    marginBottom: 12,
  },
  itemDescription: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 21,
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 17,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#354044',
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  tagText: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 0.6,
  },
  terminal: {
    color: colors.lime,
    fontSize: 9,
    lineHeight: 18,
    marginTop: 22,
  },
  activityItem: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  activityNumber: {
    color: '#414B4E',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 18,
  },
  skillGroup: {
    marginBottom: 35,
  },
  groupTitle: {
    color: colors.cyan,
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 17,
  },
  groupCount: {
    color: colors.muted,
    fontSize: 8,
    fontWeight: '400',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  skillNumber: {
    color: '#596367',
    fontSize: 10,
    width: 22,
  },
  skillInfo: {
    flex: 1,
  },
  skillName: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  skillDetail: {
    color: colors.muted,
    fontSize: 9,
    marginTop: 5,
  },
  skillStatus: {
    color: colors.lime,
    fontSize: 7,
    letterSpacing: 0.5,
    textAlign: 'right',
    maxWidth: 90,
  },
  projectItem: {
    paddingVertical: 27,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  projectLink: {
    alignSelf: 'flex-start',
    marginTop: 22,
    borderBottomWidth: 1,
    borderColor: colors.cyan,
    paddingBottom: 7,
  },
  projectLinkText: {
    color: colors.cyan,
    fontSize: 9,
    letterSpacing: 1,
  },
  contactDescription: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 23,
  },
  contactProtocol: {
    color: colors.lime,
    fontSize: 9,
    letterSpacing: 1.2,
    marginTop: 30,
    marginBottom: 15,
  },
  contactItem: {
    paddingVertical: 19,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  contactLabel: {
    color: colors.cyan,
    fontSize: 9,
    letterSpacing: 1.5,
    marginBottom: 9,
  },
  contactValue: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
  bottomNavContainer: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 10,
    alignItems: 'center',
  },
  bottomNav: {
    width: '100%',
    maxWidth: 580,
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#111719F5',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 35,
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  bottomNavItem: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 6,
    borderRadius: 20,
  },
  bottomNavItemHover: {
    backgroundColor: '#1B292D',
  },
  bottomNavText: {
    color: colors.muted,
    fontSize: 7,
    fontWeight: '600',
  },
  bottomNavTextActive: {
    color: colors.cyan,
  },
  navDivider: {
    width: 1,
    height: 28,
    backgroundColor: colors.border,
    marginHorizontal: 4,
  },
  githubButton: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 65,
    paddingTop: 25,
    borderTopWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  footerTitle: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '900',
  },
  footerText: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1,
  },
});