import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validasi format email harus menggunakan karakter '@'
    if (!email.includes('@')) {
      alert('Email harus menggunakan karakter "@"!');
      return;
    }

    if (password.trim() === '') {
      alert('Harap isi Password!');
      return;
    }

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  // ==================== 1. HALAMAN LOGIN ====================
  if (!isLoggedIn) {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.loginCard}>
          <Text style={styles.title}>MY APP</Text>
          <Text style={styles.subtitle}>UTS MOBILE 1</Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="INPUT EMAIL"
              placeholderTextColor="#9EA5B1"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="INPUT PASSWORD"
              placeholderTextColor="#9EA5B1"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.buttonText}>TOMBOL LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ==================== 2. HALAMAN HOME PAGE ====================
  return (
    <View style={styles.homeSafeArea}>
      <ScrollView contentContainerStyle={styles.homeContainer}>
        
        {/* Header Dashboard */}
        <View style={styles.headerBox}>
          <Text style={styles.greetingText}>Selamat Datang! 👋</Text>
          <Text style={styles.homeTitle}>Dashboard Mahasiswa</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={require('./assets/aduh.jpeg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>FAHMI RISTIADI</Text>
          <Text style={styles.profileRole}>Mahasiswa Aktif</Text>
        </View>

        {/* Grid Menu */}
        <View style={styles.menuGrid}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.menuBox} activeOpacity={0.8}>
            <Text style={styles.menuTitle}>Tugas Belum Selesai</Text>
            <View style={styles.valueContainer}>
              <Text style={[styles.menuValue, { color: '#FF9500' }]}>3</Text>
              <Text style={styles.unitText}>Tugas</Text>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.menuBox} activeOpacity={0.8}>
            <Text style={styles.menuTitle}>Tugas Sudah Selesai</Text>
            <View style={styles.valueContainer}>
              <Text style={[styles.menuValue, { color: '#34C759' }]}>12</Text>
              <Text style={styles.unitText}>Selesai</Text>
            </View>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity style={styles.menuBox} activeOpacity={0.8}>
            <Text style={styles.menuTitle}>Kelas Aktif</Text>
            <View style={styles.valueContainer}>
              <Text style={[styles.menuValue, { color: '#3F46C8' }]}>6</Text>
              <Text style={styles.unitText}>Kelas</Text>
            </View>
          </TouchableOpacity>

          {/* Card 4 (Absensi) */}
          <TouchableOpacity style={styles.menuBox} activeOpacity={0.8}>
            <Text style={styles.menuTitle}>Absensi Kehadiran</Text>
            <View style={styles.valueContainer}>
              <Text style={[styles.menuValue, { color: '#007AFF' }]}>96%</Text>
              <Text style={styles.unitText}>Hadir</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Tombol Logout Merah */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
          <Text style={styles.logoutButtonText}>Keluar Akun</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

// ==================== STYLES ====================
const styles = StyleSheet.create({
  // Style Login
  loginContainer: {
    flex: 1,
    backgroundColor: '#3F46C8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  loginCard: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#3F46C8',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8F9BB3',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7F9FC',
    borderWidth: 1.5,
    borderColor: '#E4E9F2',
    borderRadius: 12,
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#222B45',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3F46C8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3F46C8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },

  // Style Home
  homeSafeArea: {
    flex: 1,
    backgroundColor: '#3F46C8',
    paddingTop: 30,
  },
  homeContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  headerBox: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 14,
    color: '#E0E2FF',
    fontWeight: '500',
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 2,
  },
  profileCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 22,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    borderWidth: 3,
    borderColor: '#3F46C8',
    marginBottom: 10,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#1E293B',
    letterSpacing: 0.5,
  },
  profileRole: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  menuBox: {
    width: '48%',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    justifyContent: 'space-between',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  menuBoxEmpty: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0,
    elevation: 0,
  },
  menuTitle: {
    fontWeight: '600',
    fontSize: 12,
    color: '#475569',
    lineHeight: 16,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  menuValue: {
    fontWeight: '800',
    fontSize: 26,
  },
  unitText: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '500',
  },
  emptyText: {
    fontSize: 13,
    color: '#E0E2FF',
    fontWeight: '600',
  },
  logoutButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF3B30',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});