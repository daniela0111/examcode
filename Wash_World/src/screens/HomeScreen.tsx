import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WASH</Text>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balance}>0 kr.</Text>
      </View>

      {/* Wash Rewards Section */}
      <View style={styles.washRewardsSection}>
        <Text style={styles.washRewardsText}>Wash Rewards</Text>
        <Text style={styles.washRewards}>0</Text>
      </View>

      {/* Choose Washing Section */}
      <View style={styles.chooseWashingSection}>
        <Pressable style={styles.washButton}>
          <Text style={styles.washButtonText}>Single Wash</Text>
        </Pressable>
        <Pressable style={styles.membershipButton}>
          <Text style={styles.membershipButtonText}>Membership</Text>
        </Pressable>
      </View>

      {/* Need Help Section */}
      <Pressable style={styles.needHelpButton}>
        <Text style={styles.needHelpText}>Need Help</Text>
      </Pressable>

      {/* Bottom Navigation (replace with your implementation) */}
      <View style={styles.bottomNavigation}>
        {/* ... your bottom navigation components here ...*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  balanceText: {
    fontSize: 16,
  },
  balance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  washRewardsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  washRewardsText: {
    fontSize: 16,
  },
  washRewards: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chooseWashingSection: {
    marginTop: 20,
  },
  washButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  membershipButton: {
    backgroundColor: '#00f',
    padding: 15,
    borderRadius: 5,
  },
  washButtonText: {
    textAlign: 'center',
  },
  membershipButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
  needHelpButton: {
    marginTop: 20,
  },
  needHelpText: {
    fontSize: 16,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HomeScreen;


